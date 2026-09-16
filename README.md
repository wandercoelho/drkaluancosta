# Dr. Kaluan Costa — Ortopedia & Cirurgia de Alta Precisão

Aplicação web moderna e institucional voltada para a especialidade de Ortopedia e Traumatologia (Cirurgia de Quadril e Joelho). A plataforma foi desenvolvida com foco em alta performance, estética refinada (_medical luxury_), acessibilidade e experiência imersiva baseada em _scroll storytelling_.

---

## 🩺 Visão Geral & Experiência do Usuário (UX/UI)

A aplicação combina autoridade médica, clareza cirúrgica e design humanizado através de:

- **Hero Scroll Interativo (Storytelling Guiado pelo Scroll)**:
  - Transição contínua e imersiva conforme o usuário rola a página.
  - Animação do efeito túnel e abertura da cena biomecânica.
  - Demonstração visual do **goniômetro ortopédico** simulando a evolução da amplitude articular (de 30° de rigidez até 135° de liberdade de movimento).
  - Contadores numéricos dinâmicos com aceleração fluida para métricas clínicas.
- **Identidade Visual e Design System**:
  - Paleta equilibrada combinando tons sóbrios (_Midnight Navy_ e _Slate_), com acentos em azul cirúrgico e toques sutis de verde para chamadas de ação.
  - Tipografia editorial refinada (_Cormorant Garamond_ para títulos e _Inter_ para leitura técnica confortável).
  - Componentes com efeitos de vidro (_glassmorphism_ e _dark-glass_).
- **Navegação Inteligente**:
  - Navbar em estilo _Dynamic Island_ no desktop com efeito _blur_ translúcido.
  - Menu responsivo adaptado para dispositivos móveis.
  - Botão de ação flutuante (_Floating CTA_) responsivo e sempre acessível.
- **Seções Informativas Especializadas**:
  - Detalhamento de áreas de atuação: Artroplastia de quadril, prótese de joelho, viscossuplementação e cirurgias minimamente invasivas.
  - Apresentação da infraestrutura hospitalar e mapa interativo integrado.
  - Acordeão de Dúvidas Frequentes (FAQ) com animações suaves e total acessibilidade.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) com classes utilitárias e diretivas customizadas
- **Animações & Motion**: [Framer Motion](https://www.framer.com/motion/) (gestão de scroll progressivo, transições de layout e microinterações)
- **Ícones**: [Lucide React](https://lucide.dev/)

---

## 🔍 Otimizações de SEO & Acessibilidade

- **SEO Local & Schema.org**:
  - Estruturação semântica **JSON-LD** com o tipo `Physician`, otimizando a indexação para buscas médicas locais e geográficas.
  - Metatags completas de descrição, palavras-chave e indexação de robôs.
- **Social Graph**:
  - Tags **OpenGraph** e **Twitter Card** configuradas para compartilhamento com prévias ricas em aplicativos de mensagens e redes sociais.
- **Acessibilidade (A11y)**:
  - Marcação semântica HTML5.
  - Componentes expansíveis com atributos ARIA (`aria-expanded`, `aria-controls`, `role="region"`).
  - Gestão de contraste em conformidade com as diretrizes de legibilidade.

---

## ⚡ Scripts Disponíveis

| Comando           | Descrição                                                                            |
| :---------------- | :----------------------------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor local de desenvolvimento com Hot Module Replacement (HMR).         |
| `npm run build`   | Valida a tipagem TypeScript e gera o pacote estático otimizado na pasta `dist/`.     |
| `npm run preview` | Executa um servidor local para inspecionar os arquivos gerados no diretório `dist/`. |
| `npm run lint`    | Executa a verificação estática de tipos em todo o projeto via `tsc --noEmit`.        |
