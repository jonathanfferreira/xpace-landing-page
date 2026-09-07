# XPACE Company — Fase 1

Branch: `feature/xpace-company-architecture`, baseada em `main` (`257b95e`).

## Arquitetura e escopo

A home representa XPACE Company, com Escola de Dança, XTAGE e Technology (em breve). A Dance Company passa a ser o núcleo competitivo da escola. XTAGE tem uma apresentação e um CTA externo para https://xtage.app, sem implementação do produto neste repositório.

O entrypoint continua `index.html → index.tsx → App.tsx`. As páginas ativas importam `components/` na raiz; o quiz está em `src/components/Quiz/QuizModal.tsx`, com dados em `src/data/quizData.ts`. As cópias em `src/components/` e `xpace-dance-school/` foram mantidas para evitar uma limpeza fora do escopo. Vite, Tailwind, fontes, animações, assets e integrações existentes foram preservados.

| URL | Antes | Depois |
| --- | --- | --- |
| `/` | Escolha entre escola e companhia | Institucional XPACE Company |
| `/dance` | Inexistente | Escola, reutilizando `Escola.tsx` |
| `/dance/company` | Inexistente | Núcleo competitivo da escola |
| `/xtage` | Inexistente | Apresentação do XTAGE |
| `/escola` | Escola | Redireciona para `/dance` |
| `/company` | Dance Company | Redireciona para `/dance/company` |

O card competitivo da escola agora liga à equipe. Logo e CTA da equipe permitem voltar à escola; o CTA substitui a antiga âncora `#auditions`, que não tinha seção de destino. O logo da escola liga ao ecossistema. Títulos, descrição, Open Graph, canonical e sitemap refletem as novas rotas.

## Compatibilidade e hosting

`Navigate replace` oferece compatibilidade na SPA, inclusive com barra final; preserva query strings e os fragmentos da antiga escola. Essa navegação client-side não retorna HTTP 301. `firebase.json` prepara redirecionamentos 301 para `/escola`, `/escola/`, `/company` e `/company/`, mantendo o rewrite geral para `/index.html` e a configuração de Functions.

Nenhum deploy, alteração remota de hosting, domínio, merge ou push foi realizado. As regras 301 só serão efetivas no hosting após uma publicação futura autorizada. A validação local de SPA não comprova o comportamento HTTP em produção. Metadados das rotas internas são atualizados por JavaScript; crawlers sem execução de JS recebem o HTML institucional. Pré-renderização/SSR fica para uma fase posterior.

## Arquivos

Criados: `src/pages/CompanyHome.tsx`, `src/pages/Xtage.tsx`, `src/components/InstitutionalLayout.tsx`, este relatório.

Movido/adaptado: `src/pages/Company.tsx` → `src/pages/DanceCompany.tsx`.

Removido: `src/pages/Hub.tsx`, substituído pela home institucional.

Alterados: `App.tsx`, `components/About.tsx`, `components/CompanyHero.tsx`, `components/CompanyNavbar.tsx`, `components/Features.tsx`, `components/Navbar.tsx`, `components/SEO.tsx`, `firebase.json`, `index.html`, `public/sitemap.xml`.

Sem alterações: `src/pages/Escola.tsx`, quiz e dados, Cloud Functions, `package.json`, lockfile, configuração Vite e CSS global. Nenhuma dependência nova no projeto.

## Validação

- Antes das mudanças: `npm ci`, `npm run build` e `tsc --noEmit` passaram. Build original: JS 498,63 kB (gzip 149,44 kB).
- Não há suíte de testes da aplicação nem script de lint no package.json principal.
- Checks após mudanças: TypeScript, build de produção, diff e regressão local no navegador. Resultados finais registrados abaixo.
- O ambiente não possuía Node Linux utilizável. Node 22.16.0 e ferramentas de navegador foram preparados fora do repositório. Instalação reproduzível com o lockfile existente.
- O teste do quiz usa API simulada: verifica três perguntas, captura, payload e resultado. Não comprova entrega real por Firebase/WhatsApp e não envia leads reais.

## Problemas preexistentes e dívidas técnicas

1. `functions/src/index.ts:10`: chave de autenticação de fallback hardcoded; também existe na cópia `xpace-dance-school/functions/src/index.ts`. Nenhum valor foi reproduzido neste relatório. Remover fallback e usar secret gerenciado numa tarefa própria; avaliar rotação se houve uso real.
2. `functions/src/index.ts:11`: fallback do serviço de mensagens aponta para localhost. Conferir a configuração efetiva antes de validar entregas reais.
3. `components/ContactForm.tsx:29`: formulário chama `http://localhost:3000/api/lead`, com fallback para WhatsApp. Preservado por restrição de escopo.
4. `src/components/Quiz/QuizModal.tsx`: endpoint Firebase fixo e ausência de verificação de `response.ok`; a interface mostra resultado mesmo em falha de envio. Backend também captura falhas de mensagens sem propagá-las. Sucesso visual não prova entrega.
5. `vite.config.ts`: define variáveis Gemini para substituição no cliente. Nenhuma chave nova foi criada ou alterada. Revisar exposição caso essas variáveis sejam usadas em código cliente.
6. Duplicação de componentes e de uma cópia inteira do projeto; aumenta ambiguidade de manutenção. Há classes visuais legadas sem tokens atuais, conteúdo datado e controles com acessibilidade limitada (quiz, menus e ações de placeholder).
7. O bundle original já estava próximo de 500 kB; a migração ultrapassa ligeiramente esse limite e Vite emite um aviso não bloqueante. Separar páginas com carregamento sob demanda numa otimização posterior.
8. Recursos externos (fontes, mapas, imagens) dependem de rede. Os testes automatizados isolados bloqueiam terceiros; o teste visual inicial carregou a página normalmente. Não se auditou disponibilidade de serviços externos.

## Recomendações para a Fase 2

Priorizar configuração e tratamento de erros do fluxo de leads, segurança das credenciais e uma validação de entrega controlada. Depois consolidar os diretórios duplicados, otimizar assets/bundles, revisar acessibilidade e conteúdo comercial, e decidir estratégia de pré-renderização de SEO. CRM, IA, dashboards, novo backend e novas integrações não foram implementados.

## Resultado final

- TypeScript (`tsc --noEmit`): passou.
- Build de produção: passou em 23,81 s; JS 501,76 kB / gzip 150,52 kB; CSS 97,36 kB / gzip 14,03 kB. Aviso não bloqueante de chunk acima de 500 kB.
- Navegador: oito URLs, títulos e canonical; preservação de query/hash da escola; fluxo do quiz com API simulada; interações da grade e FAQ; escola → equipe → escola; seções competitivas; CTA do XTAGE; ausência de overflow horizontal nas novas páginas em 390 px. Nenhum erro JavaScript nos testes isolados.
- Revisão React: componentes institucionais pequenos, sem novas dependências ou efeitos de dados; links semânticos, foco visível nos novos cards, Technology sem falsa ação, descrição de nova aba no CTA externo.
- Escola, quiz, dados, Functions e dependências conferidos sem diff. Nenhum deploy/merge/push.

## Correção de compatibilidade antes da Fase 2

`/company` e `/company/` agora redirecionam para `/dance/company` na SPA e nas regras HTTP 301. Parâmetros e fragmentos são preservados na SPA para manter backlinks históricos da equipe. Esta decisão substitui o destino `/` solicitado originalmente.
