# XPACE — Estado Operacional do Projeto (PROJECT_STATE)

Este documento é a memória operacional persistente do projeto XPACE. Ele registra o estado técnico, decisões arquiteturais, riscos, configurações e próximos passos a cada avanço.

---

## 1. Contexto Empresarial e Arquitetura de Marca

```
XPACE COMPANY (Hub institucional)
│
├── XPACE DANCE (Escola de Dança e projetos culturais)
│   ├── Aulas Regulares
│   ├── XPACE Dance Company (Núcleo competitivo)
│   ├── XPACE PRO (Treinamento intensivo)
│   ├── Workshops e Espetáculos
│   └── Aluguel de Salas
│
└── ECAPX (Tecnologia, inovação e produtos digitais)
    ├── XTAGE (Gestão de festivais e eventos)
    ├── XPACEBOX (Futuro produto de hardware/software)
    └── Futuros produtos tecnológicos
```

*Nota*: O site da ECAPX é um projeto externo apartado e não é desenvolvido dentro deste repositório.

---

## 2. Rotas e Arquitetura de Software

- `/` → XPACE Company (Hub institucional)
- `/dance` → XPACE Escola de Dança
- `/dance/company` → XPACE Dance Company
- `/xtage` → Apresentação do XTAGE ("A product by ECAPX")
- `/privacy` → Política de privacidade e tratamento de dados
- `/escola` → Redirect 301 para `/dance` (preserva UTMs e parâmetros)
- `/company` → Redirect 301 para `/dance/company`

---

## 3. Histórico de Fases e Branches

| Fase | Descrição | Branch | Status | Commit Relevante |
|---|---|---|---|---|
| **Fase 1** | Reorganização do Ecossistema XPACE Company, Escola e XTAGE | `feature/xpace-company-architecture` | Concluída | `b41ddc8` |
| **Fase 2** | XPACE Lead Engine Foundation (Validação, Firestore, Idempotência, Mensageria Segura) | `feature/xpace-lead-engine-foundation` | Concluída | `9da7551` |
| **Fase 3** | XPACE Enrollment Funnel ("Encontre sua Turma" + Matching determinístico) | `feature/xpace-enrollment-funnel` | Concluída | `be726c9` |

---

## 4. Resumo Técnico da Fase 2 (Lead Engine Foundation)

- **Backend (`functions/src/leads/`)**:
  - `types.ts`: Contratos tipados de lead, idempotência e mensageria.
  - `validation.ts`: Validação estrita, normalização de telefone brasileiro com verificação de DDDs, higienização de strings e honeypot anti-spam.
  - `store.ts`: Persistência atômica transacional no Firestore (`collection: leads`) com idempotência por `requestId` e hash SHA-256 do payload.
  - `messaging.ts`: Desacoplamento da Evolution API com timeout (5s), suporte seguro a `NOT_CONFIGURED` caso segredos estejam ausentes e proibição de localhost em produção.
  - `service.ts`: Princípio de "Salvar antes de enviar mensagem". Falhas externas não causam perda de leads.
  - `handler.ts`: Roteador HTTP `/leads`, `/quiz`, `/lead`.
- **Frontend**:
  - `src/services/leads.ts`: Cliente HTTP com timeout de 20s via `AbortController`.
  - `src/utils/attribution.ts`: Captura persistente de UTMs, referrer e página.
  - `src/hooks/useLeadSubmission.ts`: Hook de submissão idempotente com retenção de `requestId`.
  - `components/ContactForm.tsx`: Migrado para a nova camada de leads (sem localhost).
  - `src/components/Quiz/QuizModal.tsx`: Migrado com tratamento de erro sem fingir sucesso.
  - `src/pages/Privacy.tsx`: Página de privacidade vinculada.
- **Segurança e Hosting**:
  - `firestore.rules`: Bloqueio irrestrito de leitura/escrita direta por clientes web (`allow read, write: if false;`). Acesso exclusivo via Firebase Admin SDK na Cloud Function.
  - `firebase.json`: Rewrite de `/api/**` para a função `api`.
  - `functions/src/index.ts`: Secrets isolados via Secret Manager (`EVOLUTION_API_KEY`).

---

## 5. Resumo Técnico da Fase 3 (XPACE Enrollment Funnel)

- **Catálogo Único de Turmas (`src/types/classes.ts`, `src/data/classes.ts`)**:
  - Catálogo centralizado de 44+ turmas ativas da XPACE.
  - Todos os itens possuem `minAge`, `maxAge`, `level`, `days`, `period`, `time`, `room`, `active`, `acceptsTrial`.
  - Grupos de competição / audição (ex: Cias) configurados com `acceptsTrial: false`.
  - `components/Schedule.tsx` refatorado para alimentar a grade semanal automaticamente a partir deste catálogo (`getWeeklySchedule()`).
- **Matching Engine Determinístico (`src/services/classMatcher.ts`, `src/types/funnel.ts`)**:
  - 100% determinístico (sem alucinações de horários ou turmas inexistentes).
  - Filtros Rígidos: `active === true`, `acceptsTrial === true`, `minAge <= age <= maxAge`.
  - Critérios de Ranqueamento: Modalidade (+40), Período (+25), Dias (+20), Experiência (+15 a +30), Objetivo (+15).
  - Critérios de desempate consistentes: Pontuação decrescente, dança prioritária sobre artes marciais, horário mais cedo, ID alfabético.
- **Frontend Funnel UI (`src/components/EnrollmentFunnel/EnrollmentModal.tsx`)**:
  - 6 etapas guiadas: Idade (chips rápidos + campo numérico), Modalidades (agrupadas e multi-seleção), Experiência (4 níveis), Disponibilidade (turnos + sábado), Objetivo (4 pilares pedagógicos), Lead Capture (Nome, WhatsApp formatado, Honeypot, Política de Privacidade).
  - Tela de Recomendações: Apresenta os top 1 a 3 cards com badges de sala, nível, horário e motivos de compatibilidade.
  - CTAs claros: "Agendar Aula Experimental" (abre link oficial NextFit em nova aba) e "Tirar dúvidas no WhatsApp" (mensagem pré-configurada).
  - Fallback: Possibilidade de ver recomendações sem registro obrigatório de contato.
  - Atualização dos botões da Hero de "DESCUBRA SEU ESTILO" para "ENCONTRE SUA TURMA".
- **Backend Lead Engine Estendido (`functions/src/leads/`)**:
  - Contratos e validação estendidos para aceitar atributos do funil: `age`, `preferredModalities`, `experience`, `availability`, `objective`, `recommendedClassIds`, `selectedClassId`.
  - Validação estrita de idade (1 a 120 anos) e flexibilização de `quizResult` para submissões vindas do funil.
- **Testes Automatizados**:
  - 14 testes em `test/funnel-matching.test.cjs` validando regras de exclusão por idade, inatividade, aceitação de experimental, pesos de ranqueamento e integridade dos dados da grade.
  - 20 testes em `functions/test/leads.test.js` cobrindo validação de payloads do funil, persistência e idempotência.
  - Script `npm test` unificado executando todos os 34 testes.

---

## 6. Decisões Técnicas Importantes

1. **Determinismo Absoluto**: O matching de turmas e horários nunca usa IA generativa. Usa exclusivamente a grade real cadastrada no catálogo central.
2. **NextFit como Sistema Externo de Agendamento**: O link de agendamento NextFit (`https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4`) é mantido sem dependência de API fechada do NextFit, capturando a intenção do aluno pelo Lead Engine da XPACE.
3. **Idempotência no Backend**: `requestId` UUIDv4 retido no frontend e transação atômica no Firestore baseada em hash SHA-256 impedem duplicatas mesmo sob retry de rede.
4. **Resiliência de Mensageria**: Ausência de secrets resulta em `NOT_CONFIGURED` sem quebrar a submissão nem prejudicar a conversão do usuário.

---

## 7. Configurações Necessárias Antes do Primeiro Deploy (Produção)

- `EVOLUTION_API_KEY`: Secret a ser cadastrado no Google Secret Manager (`firebase functions:secrets:set`).
- `SERVER_URL`: Variável de ambiente HTTPS pública da Evolution API.
- `EVOLUTION_INSTANCE`: Nome da instância (ex: `XPACE`).
- `LEAD_NOTIFICATION_PHONES`: Telefones de notificação dos administradores.
- `LEAD_ALLOWED_ORIGINS`: Domínios autorizados para CORS (`https://xpacecompany.com,https://www.xpacecompany.com,https://xpace-premium-96518327-b22be.web.app`).

---

## 8. Itens que Dependem de Decisão Humana

1. **Revisão Pedagógica da Grade de Aulas**: A grade centralizada em `src/data/classes.ts` deve ser periodicamente checada com a secretaria da XPACE para refletir eventuais novos horários ou trocas de sala.
2. **Revisão Jurídica da Política de Privacidade**: O texto em `/privacy` está marcado como minuta preliminar e deve ser validado formalmente pela administração da XPACE.
3. **Ativação dos Segredos em Produção**: Inclusão das credenciais reais da Evolution API no Google Cloud Secret Manager.
4. **Aprovação para Deploy**: Nenhum deploy em produção ou merge em `main` deve ser realizado sem aprovação explícita.
