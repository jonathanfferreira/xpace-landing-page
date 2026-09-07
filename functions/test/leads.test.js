const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { validateLead, normalizePhone, LeadError } = require('../lib/leads/validation');
const { createLeadService } = require('../lib/leads/service');
const { createLeadHandler } = require('../lib/leads/handler');
const { createMessenger } = require('../lib/leads/messaging');

// Mock in-memory LeadStore for testing persistence & idempotency
function createMockStore() {
  const db = new Map();
  const recordMessagingCalls = [];
  return {
    db,
    recordMessagingCalls,
    serverTimestamp: () => new Date('2026-09-07T12:00:00Z'),
    createOrGet: async (lead) => {
      if (db.has(lead.id)) {
        const stored = db.get(lead.id);
        if (stored.payloadHash !== lead.payloadHash) {
          throw new LeadError('REQUEST_CONFLICT', 409);
        }
        return { created: false, lead: stored };
      }
      db.set(lead.id, { ...lead });
      return { created: true, lead };
    },
    recordMessaging: async (id, messaging) => {
      recordMessagingCalls.push({ id, messaging });
      if (db.has(id)) {
        const item = db.get(id);
        item.messaging = messaging;
        item.messageStatus = messaging.user.status;
        item.notificationStatus = messaging.internal.status;
        item.updatedAt = new Date('2026-09-07T12:00:01Z');
      }
    }
  };
}

const mockLog = () => {};

describe('XPACE Lead Engine Foundation Tests (Phase 2)', () => {

  const sampleValidPayload = {
    requestId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    name: 'Ana Carolina Santos',
    phone: '5547999998888',
    leadType: 'QUIZ',
    email: 'ana@example.com',
    message: '',
    intent: 'quiz_result',
    source: 'google',
    page: '/dance',
    referrer: 'https://www.google.com/search',
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'inverno_2026',
    utmContent: 'banner_a',
    utmTerm: 'danca_joinville',
    quizResult: 'STREET DANCE / URBAN',
    quizAnswers: { ritmo: 85, coordenacao: 90 }
  };

  // ==========================================
  // CENÁRIO A: Payload válido -> persistido -> mensageria disponível -> status correto
  // ==========================================
  describe('Cenário A: Payload válido com mensageria disponível', () => {
    it('deve persistir o lead antes da mensageria e registrar status SENT', async () => {
      const store = createMockStore();
      let messagingCalled = false;

      const mockSendMessages = async (lead) => {
        // Garantir que no momento em que a mensageria é chamada, o lead já foi gravado no banco!
        assert.equal(store.db.has(lead.requestId), true, 'Lead deve estar salvo no banco antes de disparar mensageria');
        messagingCalled = true;
        return {
          user: { status: 'SENT' },
          internal: { status: 'SENT' }
        };
      };

      const service = createLeadService({ store, sendMessages: mockSendMessages, log: mockLog });
      const result = await service(sampleValidPayload);

      assert.equal(result.success, true);
      assert.equal(result.persisted, true);
      assert.equal(result.leadId, sampleValidPayload.requestId);
      assert.equal(result.messaging.user, 'SENT');
      assert.equal(result.messaging.internal, 'SENT');
      assert.equal(messagingCalled, true);

      // Verificar persistência no banco
      const saved = store.db.get(sampleValidPayload.requestId);
      assert.ok(saved);
      assert.equal(saved.id, sampleValidPayload.requestId);
      assert.equal(saved.idempotencyKey, sampleValidPayload.requestId);
      assert.equal(saved.name, 'Ana Carolina Santos');
      assert.equal(saved.phone, '5547999998888');
      assert.equal(saved.status, 'NEW');
      assert.equal(saved.messageStatus, 'SENT');
      assert.equal(saved.notificationStatus, 'SENT');
      assert.equal(saved.utmCampaign, 'inverno_2026');
    });
  });

  // ==========================================
  // CENÁRIO B: Payload válido -> persistido -> mensageria falha -> lead continua salvo
  // ==========================================
  describe('Cenário B: Falha na mensageria externa não perde o lead', () => {
    it('deve manter o lead persistido com status FAILED quando Evolution API falhar', async () => {
      const store = createMockStore();

      const failingSendMessages = async (lead) => {
        assert.equal(store.db.has(lead.requestId), true);
        return {
          user: { status: 'FAILED', error: 'TIMEOUT' },
          internal: { status: 'FAILED', error: 'UNAVAILABLE' }
        };
      };

      const service = createLeadService({ store, sendMessages: failingSendMessages, log: mockLog });
      const result = await service(sampleValidPayload);

      // Lead permanece salvo com sucesso na resposta
      assert.equal(result.success, true);
      assert.equal(result.persisted, true);
      assert.equal(result.leadId, sampleValidPayload.requestId);
      assert.equal(result.messaging.user, 'FAILED');
      assert.equal(result.messaging.internal, 'FAILED');

      // Lead continua no store com dados intactos
      const saved = store.db.get(sampleValidPayload.requestId);
      assert.ok(saved, 'Lead deve continuar salvo após falha de mensageria');
      assert.equal(saved.messageStatus, 'FAILED');
      assert.equal(saved.notificationStatus, 'FAILED');
    });

    it('deve manter o lead persistido quando mensageria lança exceção inesperada', async () => {
      const store = createMockStore();

      const throwingSendMessages = async () => {
        throw new Error('Network crash connection refused');
      };

      const service = createLeadService({ store, sendMessages: throwingSendMessages, log: mockLog });
      const result = await service(sampleValidPayload);

      assert.equal(result.success, true);
      assert.equal(result.persisted, true);
      assert.equal(result.messaging.user, 'FAILED');
      assert.ok(store.db.has(sampleValidPayload.requestId));
    });
  });

  // ==========================================
  // CENÁRIO C: Payload inválido -> rejeitado -> lead não criado
  // ==========================================
  describe('Cenário C: Validação server-side e proteção contra spam', () => {
    it('deve rejeitar telefones com formato ou DDDs inválidos', () => {
      assert.throws(() => normalizePhone('12345'), /INVALID_PHONE/);
      assert.throws(() => normalizePhone('abc-def'), /INVALID_PHONE/);
      assert.throws(() => normalizePhone('(00) 99999-9999'), /INVALID_PHONE/);
      assert.throws(() => normalizePhone('(47) 11111-1111'), /INVALID_PHONE/);
    });

    it('deve normalizar telefones válidos com DDD brasileiro', () => {
      assert.equal(normalizePhone('(47) 99999-8888'), '5547999998888');
      assert.equal(normalizePhone('+55 47 99999-8888'), '5547999998888');
      assert.equal(normalizePhone('5547999998888'), '5547999998888');
      assert.equal(normalizePhone('4734331234'), '554734331234');
    });

    it('deve rejeitar se o honeypot website for preenchido por bot', () => {
      assert.throws(() => validateLead({
        ...sampleValidPayload,
        website: 'https://spambot-promo.com'
      }), /SUBMISSION_REJECTED/);
    });

    it('deve rejeitar nomes curtos ou sem letras', () => {
      assert.throws(() => validateLead({
        ...sampleValidPayload,
        name: 'A'
      }), /INVALID_NAME/);

      assert.throws(() => validateLead({
        ...sampleValidPayload,
        name: '12345'
      }), /INVALID_NAME/);
    });

    it('deve rejeitar quiz com campos ou chaves maliciosas', () => {
      assert.throws(() => validateLead({
        ...sampleValidPayload,
        quizAnswers: { '__proto__': 50 }
      }), /INVALID_QUIZ/);

      assert.throws(() => validateLead({
        ...sampleValidPayload,
        quizAnswers: { pontuacao: 150 }
      }), /INVALID_QUIZ/);
    });

    it('não deve invocar persistência se payload for inválido no handler', async () => {
      const store = createMockStore();
      const service = createLeadService({
        store,
        sendMessages: async () => ({ user: { status: 'SENT' }, internal: { status: 'SENT' } }),
        log: mockLog
      });
      const handler = createLeadHandler(service, mockLog);

      const res = await handler({
        method: 'POST',
        path: '/leads',
        contentType: 'application/json',
        bodyBytes: 50,
        body: { name: 'Maria', phone: 'invalido' }
      });

      assert.equal(res.status, 400);
      assert.equal(res.body.success, false);
      assert.equal(store.db.size, 0, 'Nenhum lead deve ter sido gravado');
    });
  });

  // ==========================================
  // CENÁRIO D: Mesma idempotencyKey reenviada -> não cria segundo lead
  // ==========================================
  describe('Cenário D: Idempotência com mesma chave', () => {
    it('deve retornar o lead já existente e não reenviar mensagens nem duplicar documento', async () => {
      const store = createMockStore();
      let messagesCount = 0;

      const mockSendMessages = async () => {
        messagesCount++;
        return { user: { status: 'SENT' }, internal: { status: 'SENT' } };
      };

      const service = createLeadService({ store, sendMessages: mockSendMessages, log: mockLog });

      // 1º envio
      const res1 = await service(sampleValidPayload);
      assert.equal(res1.success, true);
      assert.equal(store.db.size, 1);
      assert.equal(messagesCount, 1);

      // 2º envio com EXATAMENTE o mesmo requestId (simulando retry de timeout no frontend)
      const res2 = await service(sampleValidPayload);
      assert.equal(res2.success, true);
      assert.equal(res2.leadId, sampleValidPayload.requestId);

      // Banco ainda tem apenas 1 documento
      assert.equal(store.db.size, 1);
      // Mensagens NÃO foram enviadas novamente
      assert.equal(messagesCount, 1);
    });

    it('deve retornar conflito HTTP 409 se a mesma chave for enviada com payload divergente', async () => {
      const store = createMockStore();
      const service = createLeadService({
        store,
        sendMessages: async () => ({ user: { status: 'SENT' }, internal: { status: 'SENT' } }),
        log: mockLog
      });

      // 1º envio
      await service(sampleValidPayload);

      // 2º envio com mesmo requestId mas nome diferente
      const modifiedPayload = { ...sampleValidPayload, name: 'Outra Pessoa Conflitante' };
      await assert.rejects(async () => {
        await service(modifiedPayload);
      }, (err) => err.code === 'REQUEST_CONFLICT' && err.httpStatus === 409);
    });
  });

  // ==========================================
  // CENÁRIO E: ContactForm não utiliza localhost hardcoded
  // ==========================================
  describe('Cenário E: ContactForm sem localhost hardcoded', () => {
    it('verifica que ContactForm.tsx não contém localhost:3000 e utiliza useLeadSubmission', () => {
      const contactFormPath = path.resolve(__dirname, '../../components/ContactForm.tsx');
      const content = fs.readFileSync(contactFormPath, 'utf8');

      assert.equal(content.includes('http://localhost:3000/api/lead'), false, 'Não deve conter URL localhost:3000');
      assert.equal(content.includes('localhost:3000'), false, 'Não deve conter referência a localhost:3000');
      assert.ok(content.includes('useLeadSubmission'), 'Deve utilizar o hook useLeadSubmission');
      assert.ok(content.includes('LeadHoneypot'), 'Deve utilizar LeadHoneypot');
      assert.ok(content.includes('LeadPrivacyNotice'), 'Deve conter o aviso de privacidade');
    });
  });

  // ==========================================
  // CENÁRIO F: Quiz recebe erro e não simula sucesso
  // ==========================================
  describe('Cenário F: QuizModal trata erros de submissão sem simular sucesso', () => {
    it('verifica que QuizModal.tsx não finge persistência quando a API falha', () => {
      const quizModalPath = path.resolve(__dirname, '../../src/components/Quiz/QuizModal.tsx');
      const content = fs.readFileSync(quizModalPath, 'utf8');

      // Não deve ter a URL antiga da cloud function hardcoded
      assert.equal(content.includes('cloudfunctions.net/api/quiz'), false, 'Não deve conter URL antiga de Cloud Function');

      // Verifica tratamento com base na resposta de persistência
      assert.ok(content.includes('useLeadSubmission'), 'Deve usar useLeadSubmission');
      assert.ok(content.includes('const saved = await submit'), 'Deve aguardar a confirmação de submit');
      assert.ok(content.includes("if (saved) setStep('result');"), 'Só avança para result se submissão salvou ou se o usuário explicitamente escolher ver sem registrar');
      assert.ok(content.includes('Ver meu resultado sem registrar contato'), 'Permite ao usuário ver resultado caso o registro falhe');
    });
  });

  // ==========================================
  // CENÁRIO G: UTMs chegam no payload esperado
  // ==========================================
  describe('Cenário G: Captura e envio de parâmetros UTM e atribuição', () => {
    it('valida que validateLead preserva todos os campos de UTM e referrer seguro', () => {
      const rawInput = {
        requestId: '11111111-2222-4333-8444-555555555555',
        name: 'Carlos Eduardo',
        phone: '47988887777',
        leadType: 'CONTACT',
        message: 'Gostaria de agendar uma aula experimental de Hip Hop.',
        page: '/dance',
        referrer: 'https://instagram.com/p/xyz123?utm_ignore=1',
        utmSource: 'instagram_ads',
        utmMedium: 'stories',
        utmCampaign: 'promo_abril',
        utmContent: 'carrossel_video',
        utmTerm: 'danca'
      };

      const validated = validateLead(rawInput);
      assert.equal(validated.utmSource, 'instagram_ads');
      assert.equal(validated.utmMedium, 'stories');
      assert.equal(validated.utmCampaign, 'promo_abril');
      assert.equal(validated.utmContent, 'carrossel_video');
      assert.equal(validated.utmTerm, 'danca');
      assert.equal(validated.page, '/dance');
      assert.equal(validated.referrer, 'https://instagram.com/p/xyz123');
      assert.equal(validated.source, 'instagram_ads');
    });

    it('infere source automaticamente pelo referrer se utmSource estiver ausente', () => {
      const inputInstagram = {
        requestId: '22222222-3333-4444-8555-666666666666',
        name: 'Juliana Lima',
        phone: '47988887777',
        leadType: 'CONTACT',
        message: 'Dúvidas sobre matrícula',
        referrer: 'https://l.instagram.com/'
      };
      const valInstagram = validateLead(inputInstagram);
      assert.equal(valInstagram.source, 'INSTAGRAM');

      const inputGoogle = {
        requestId: '33333333-4444-4555-8666-777777777777',
        name: 'Juliana Lima',
        phone: '47988887777',
        leadType: 'CONTACT',
        message: 'Dúvidas sobre matrícula',
        referrer: 'https://www.google.com.br/search?q=xpace'
      };
      const valGoogle = validateLead(inputGoogle);
      assert.equal(valGoogle.source, 'GOOGLE');
    });
  });

  // ==========================================
  // SEGURANÇA E MENSAGERIA: Proibição de localhost e segredos
  // ==========================================
  describe('Segurança da Mensageria (Requisito 9)', () => {
    it('retorna NOT_CONFIGURED se SERVER_URL for localhost ou ausente', async () => {
      const messenger = createMessenger(() => ({
        serverUrl: 'http://localhost:8080',
        apiKey: 'some_key',
        instance: 'XPACE'
      }));

      const res = await messenger(sampleValidPayload);
      assert.equal(res.user.status, 'NOT_CONFIGURED');
      assert.equal(res.internal.status, 'NOT_CONFIGURED');
    });

    it('retorna NOT_CONFIGURED se chave de API estiver ausente', async () => {
      const messenger = createMessenger(() => ({
        serverUrl: 'https://evolution.example.com',
        apiKey: '',
        instance: 'XPACE'
      }));

      const res = await messenger(sampleValidPayload);
      assert.equal(res.user.status, 'NOT_CONFIGURED');
    });
  });
});
