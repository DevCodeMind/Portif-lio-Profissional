# 🚀 Portfólio Moderno — Wallef Ryan

Portfólio profissional com design moderno e interativo, desenvolvido com **HTML5**, **CSS3** avançado e **JavaScript** vanilla. Apresenta landing pages para profissionais com interface elegante e animações fluidas.

## ✨ Características Principais

- 🎨 **Design Moderno**: Glassmorphism, gradientes dinâmicos e micro-interações
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Animações CSS suaves e carregamento rápido
- 🎯 **UX Avançada**: Scroll-triggered animations e feedback visual
- 🌙 **Tema Dark Premium**: Paleta de cores profissional com acentos cyan e roxo
- ♿ **Acessibilidade**: Foco visível, navegação por teclado e contraste adequado

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html           # Página principal com estrutura HTML5 semântica
├── css/
│   └── styles.css       # Estilos modernos com variáveis CSS customizadas
├── js/
│   └── main.js          # JavaScript para interatividade e animações
├── assets/              # (opcional) imagens, ícones, favicon
└── README.md            # Esta documentação
```

### 📄 index.html
- Estrutura HTML5 semântica e acessível
- Componentes modulares e bem organizados
- Meta tags otimizadas para SEO
- Links para CSS e JavaScript

### 🎨 css/styles.css
- **Variáveis CSS** para fácil manutenção e consistência
- **Layout responsivo** com CSS Grid e Flexbox
- **Animações fluidas** com cubic-bezier transitions
- **Efeitos visuais**: glassmorphism, gradientes, sombras dinâmicas
- **Tipografia moderna**: Outfit + JetBrains Mono
- **Componentes**: cards interativos, botões com hover effects

### ⚙️ js/main.js
- **Intersection Observer** para animações de scroll
- **Modal dinâmico** com cards de projetos
- **Navegação suave** e interações responsivas
- **Dados estruturados** para fácil manutenção

## 🎯 Funcionalidades

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com gradientes animados, CTA buttons e elementos flutuantes |
| **Sobre** | Texto profissional + tecnologias com badges interativos |
| **Projetos** | Cards 3D com hover effects que abrem modal com sub-cards |
| **Contato** | WhatsApp e e-mail com ícones e links diretos |
| **Modal** | Painel com cards visuais para cada projeto/categoria |

## 🎨 Design System

### Cores (CSS Variables)
```css
--bg: #0a0b0f;              /* Fundo principal */
--bg-elevated: #14151a;     /* Cards e elevações */
--text: #f1f5f9;            /* Texto principal */
--accent: #06b6d4;          /* Cyan principal */
--accent-secondary: #8b5cf6; /* Roxo secundário */
--glow: 0 0 100px rgba(6, 182, 212, 0.2);
```

### Tipografia
- **Corpo**: Outfit (400, 500, 600, 700)
- **Mono**: JetBrains Mono (400, 500)
- **Escala**: clamp() para responsividade fluida

### Componentes
- **Botões**: Gradientes, shimmer effects, estados hover
- **Cards**: Sombras dinâmicas, transformações 3D
- **Links**: Underline animado, background hover
- **Modal**: Glassmorphism, animações de entrada/saída

## 🚀 Como Usar

### Desenvolvimento Local
```bash
# Na pasta portfolio:
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Deploy
1. Faça upload dos arquivos para seu servidor
2. Ajuste os caminhos relativos se necessário
3. Teste todos os links e funcionalidades

## 🔧 Personalização

### 1. Cores e Tema
Edite as variáveis CSS em `styles.css`:
```css
:root {
  --accent: #your-color;
  --bg: #your-background;
}
```

### 2. Conteúdo
- **Texto**: Edite diretamente no `index.html`
- **Links**: Atualize hrefs e dados de contato
- **Projetos**: Modifique `PAINEL_DADOS` em `main.js`

### 3. Novos Projetos
```javascript
// Em js/main.js, adicione ao PAINEL_DADOS:
novos: {
  titulo: "Novos Projetos",
  subtitulo: "Descrição...",
  opcoes: [
    { label: "Projeto X", href: "../projeto-x/index.html", icon: "🚀" }
  ]
}
```

### 4. Animações
- Ajuste `observerOptions` para controlar quando as animações disparam
- Modifique `transition` durations no CSS
- Adicione novos keyframes para efeitos customizados

## 📱 Responsividade

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Ajustes de espaçamento e grid adaptável
- **Mobile**: Navegação vertical, botões full-width, toque otimizado

## 🎭 Animações

- **Scroll-triggered**: Elementos aparecem ao rolar (Intersection Observer)
- **Hover effects**: Transformações suaves em botões e cards
- **Modal transitions**: Entrada/saída com backdrop blur
- **Micro-interactions**: Feedback visual em todas as interações

## 🔍 SEO e Performance

- **Meta tags** completas para motores de busca
- **Open Graph** para compartilhamento em redes sociais
- **Lazy loading** implícito nas imagens
- **CSS otimizado** com variáveis e seletores eficientes
- **JavaScript mínimo** para performance máxima

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Semântica e acessibilidade
- **CSS3**: Grid, Flexbox, Animations, Variables
- **JavaScript ES6+**: Intersection Observer, DOM manipulation
- **Google Fonts**: Outfit e JetBrains Mono
- **Favicon**: Ícone personalizado

## 📈 Próximos Passos

- [ ] Adicionar modo light/dark toggle
- [ ] Implementar PWA capabilities
- [ ] Adicionar analytics e tracking
- [ ] Criar versão multilíngue
- [ ] Otimizar Core Web Vitals

---

**🎨 Design por Wallef Ryan** • **💻 Desenvolvido com ❤️**


```bash
# Na pasta pai (ex.: CURSOR), com Python 3:
python -m http.server 8080
```

Depois acesse `http://localhost:8080/portfolio/`.

---

© Documentação do projeto — ajuste este README quando o portfólio evoluir.
