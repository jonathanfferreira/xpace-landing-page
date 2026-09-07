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
- Proteção anti-spam com campo honeypot invisível.
- Persistência atômica no Firestore antes de chamadas de mensageria externa.
- Idempotência baseada em `requestId` retido e hash SHA-256 do payload.
- Integração desacoplada com Evolution API (WhatsApp) e fallback seguro (`NOT_CONFIGURED`).
- Captura contínua de atribuição e campanhas (UTMs, referrer, pathname).
- Página de privacidade (`/privacy`) e regras de bloqueio direto no Firestore (`firestore.rules`).
- 17 testes automatizados cobrindo todos os cenários de persistência e segurança.

### ✅ Fase 3 — XPACE Enrollment Funnel (Concluída)
- **Substituição do Quiz Genérico**: Novo funil comercial determinístico **"Encontre sua Turma"** (`src/components/EnrollmentFunnel/EnrollmentModal.tsx`).
- **Catálogo Único de Turmas**: Catálogo centralizado (`src/data/classes.ts`) com mais de 44 turmas ativas, alimentando tanto a grade pública (`components/Schedule.tsx`) quanto o algoritmo de recomendação.
- **Matching Engine Determinístico**: Algoritmo de filtragem e ranqueamento (`src/services/classMatcher.ts`) por idade, modalidade, nível, dias/períodos e objetivo de aprendizado (sem IA, 100% determinístico).
- **Experiência Mobile-First**: Percurso fluido de 6 etapas orientando o visitante até 1 a 3 turmas ideais com motivos de compatibilidade.
- **Agendamento com Rastreamento**: CTAs diretos para agendamento via NextFit (`https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4`) e contato via WhatsApp com mensagem personalizada.
- **Integração Backend**: Ingestão completa no Lead Engine com validação estrita de novos atributos (`age`, `preferredModalities`, `experience`, `availability`, `objective`, `recommendedClassIds`, `selectedClassId`).
- **Cobertura de Testes**: 34 testes automatizados unificados (`npm test`) validando todas as regras do catálogo, ranqueamento e backend.

### 🟡 Fase 4 — XPACE CRM (Próxima Fase)
- Gestão centralizada dos leads captados, organizados por estágio do funil (Novo, Contatado, Aula Agendada, Compareceu, Não Compareceu, Matriculado, Perdido).
- Visão operacional para a secretaria e coordenação da escola.

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
