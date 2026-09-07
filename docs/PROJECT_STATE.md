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
| **Fase 3** | XPACE Enrollment Funnel ("Encontre sua Turma" + Matching determinístico) | `feature/xpace-enrollment-funnel` | Em andamento | *(A iniciar)* |

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
- **Testes**: 17 testes automatizados em `functions/test/leads.test.js` com 100% de aprovação.

---

## 5. Decisões Técnicas Importantes

1. **Idempotência**: Uso de `requestId` UUIDv4 retido no frontend durante tentativas e transação no Firestore baseada em hash SHA-256. Impede duplicatas em caso de retry após timeout.
2. **Prioridade de Persistência**: O lead é salvo no banco antes de qualquer requisição externa (Evolution API).
3. **Resiliência de Mensageria**: Ausência de secrets resulta em `NOT_CONFIGURED` sem quebrar a submissão.
4. **Sem Redesign Estético Prematuro**: Foco 100% em conversão e estabilidade da máquina de aquisição.

---

## 6. Configurações Necessárias Antes do Primeiro Deploy (Produção)

- `EVOLUTION_API_KEY`: Secret a ser cadastrado no Google Secret Manager (`firebase functions:secrets:set`).
- `SERVER_URL`: Variável de ambiente HTTPS pública da Evolution API.
- `EVOLUTION_INSTANCE`: Nome da instância (ex: `XPACE`).
- `LEAD_NOTIFICATION_PHONES`: Telefones de notificação dos administradores.
- `LEAD_ALLOWED_ORIGINS`: Domínios autorizados para CORS (`https://xpacecompany.com,https://www.xpacecompany.com,https://xpace-premium-96518327-b22be.web.app`).

---

## 7. Itens que Dependem de Decisão Humana

1. **Revisão Jurídica da Política de Privacidade**: O texto em `/privacy` está marcado como minuta preliminar e deve ser validado formalmente pela administração da XPACE.
2. **Revisão da Grade de Aulas**: A grade atual de horários (`components/Schedule.tsx`) pode ter sofrido alterações recentes pela escola e precisará ser validada com a coordenação pedagógica.
3. **Ativação dos Segredos em Produção**: Inclusão das credenciais reais da Evolution API no Google Cloud Secret Manager.

---

## 8. Próxima Etapa

- **Fase 3**: XPACE Enrollment Funnel (Funil "Encontre sua Turma" com catálogo estruturado e matching engine determinístico).
