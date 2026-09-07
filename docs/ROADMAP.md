# XPACE — Roadmap do Produto

O objetivo de negócio prioritário da XPACE é:
**Aumentar o número de alunos matriculados na XPACE Escola de Dança.**

O roadmap foi desenhado para otimizar progressivamente o funil de aquisição:
**Visitantes → Leads → Aulas Experimentais → Comparecimento → Matrícula**.

---

## Fases do Projeto

### ✅ Fase 1 — Reorganização do Ecossistema XPACE (Concluída)
- Separação de XPACE Company (`/`), Escola de Dança (`/dance`), Dance Company (`/dance/company`) e XTAGE (`/xtage`).
- Redirects 301 preservando parâmetros de campanha (`/escola` e `/company`).
- Atualizações básicas de identidade visual e SEO.

### ✅ Fase 2 — XPACE Lead Engine Foundation (Concluída)
- Pipeline seguro de ingestão de leads no backend (Firebase Functions v1).
- Validação server-side estrita com normalização de telefone brasileiro.
- Proteção anti-spam proporcional com campo honeypot invisível.
- Persistência atômica no Firestore antes de chamadas de mensageria externa.
- Idempotência baseada em `requestId` retido e hash SHA-256 do payload.
- Integração desacoplada com Evolution API (WhatsApp) e fallback seguro (`NOT_CONFIGURED`).
- Captura contínua de atribuição e campanhas (UTMs, referrer, pathname).
- Página de privacidade (`/privacy`) e regras de bloqueio direto no Firestore (`firestore.rules`).
- 17 testes automatizados cobrindo todos os cenários de persistência e segurança.

### 🟡 Fase 3 — XPACE Enrollment Funnel (Em andamento)
- **Objetivo**: Substituir o quiz genérico por um funil comercial determinístico: **"Encontre sua Turma"**.
- **Fonte única de dados de turmas**: Catálogo tipado e estruturado compartilhado entre a grade (`components/Schedule.tsx`) e o funil.
- **Matching Engine Determinístico**: Algoritmo de ranqueamento baseado em compatibilidade estrita de idade, modalidade, nível, dias/períodos disponíveis e objetivo pedagógico.
- **Experiência Mobile-First**: Percurso fluído de 5 perguntas simples orientando o visitante até 1 a 3 turmas ideais reais.
- **Agendamento Facilitado**: CTA claro para solicitação de aula experimental, integrando dados ao Lead Engine da Fase 2 e conectando ao link de agendamento NextFit com rastreio da turma escolhida.

### ⚪ Fase 4 — XPACE CRM
- Gestão centralizada dos leads captados, organizados por estágio do funil (Novo, Contatado, Aula Agendada, Compareceu, Não Compareceu, Matriculado, Perdido).
- Visão operacional para a secretaria da escola.

### ⚪ Fase 5 — Agente Comercial / WhatsApp
- Atendimento automatizado ágil via WhatsApp conectado à Evolution API.
- Respostas rápidas e qualificadas sobre horários, valores e agendamento de experimentais.

### ⚪ Fase 6 — Follow-up Automático
- Régua de comunicação para confirmação de presença em aulas experimentais.
- Reengajamento de alunos que fizeram experimental mas não concluíram a matrícula.

### ⚪ Fase 7 — Analytics de Aquisição e Conversão
- Rastreamento completo de taxa de conversão por anúncio, criativo, modalidade e faixa etária.

### ⚪ Fase 8 — XPACE Company Product Hub Completo
- Expansão das páginas de produtos e iniciativas do ecossistema XPACE Company.
