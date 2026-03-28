document.getElementById("year").textContent = new Date().getFullYear();

// Intersection Observer para animações de entrada
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -10px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      /* para de observar após animar — não esconde mais ao sair da viewport */
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
  // Animações de entrada para seções
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Animações para cards
  const cards = document.querySelectorAll('.card-projeto');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});

const ICONES = {
  cerebro:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.98-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2"/></svg>`,
  dente:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-1.5-2-4-2.5-5.5-1C4 6 4 9 5 11c.7 1.5 1 3 1 4.5 0 2 .5 3.5 1.5 3.5s1.5-1.5 2-3c.3-1 .5-1 1-1s.7 0 1 1c.5 1.5 1 3 2 3s1.5-1.5 1.5-3.5c0-1.5.3-3 1-4.5 1-2 1-5-.5-6.5C14 4 13 4 12 5.5z"/></svg>`,
  folha:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  hospital:   `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4m-2-2h4M3 21h18M3 10l9-7 9 7M5 21V10M19 21V10M9 21v-4a3 3 0 0 1 6 0v4"/></svg>`,
  haltere:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 10h18M3 14h18"/><circle cx="6.5" cy="6.5" r="2"/><circle cx="17.5" cy="6.5" r="2"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/></svg>`,
  academia:   `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  tesoura:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  espelho:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z"/><path d="M12 8v4l3 3"/></svg>`,
  ferramenta: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  balanca:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 9l9-6 9 6M5 20h14"/><path d="M5 9l-2 6h4L5 9zM19 9l-2 6h4l-2-6z"/></svg>`,
  mais:       `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  estrela:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};

const PAINEL_DADOS = {
  saude: {
    titulo: "Landings — área da saúde",
    subtitulo: "Escolha uma demonstração para abrir em nova aba.",
    opcoes: [
      { label: "Psicologia / consultório", href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/psicologa-landing/index.html", icon: ICONES.cerebro },
      { label: "Odontologia / dentista",   href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/odontologia-landing/index.html", icon: ICONES.dente },
      { label: "Nutrição",                 href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/nutricao-landing/index.html", icon: ICONES.folha },
      { label: "Clínica / agenda médica",  href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/clinica-landing/index.html", icon: ICONES.hospital },
    ],
  },
  fitness: {
    titulo: "Landings — fitness e bem-estar",
    subtitulo: "Páginas para personal trainers e profissionais de saúde física.",
    opcoes: [
      { label: "Personal Trainer", href: "projetos/personal-landing/index.html", icon: ICONES.haltere },
      { label: "Academia Moderna", href: "projetos/academia-landing/index.html", icon: ICONES.academia },
    ],
  },
  beleza: {
    titulo: "Landings — beleza e estética",
    subtitulo: "Páginas para salões de beleza, barbearias e profissionais de estética.",
    opcoes: [
      { label: "Salão de Beleza", href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/beleza-landing/index.html", icon: ICONES.espelho },
      { label: "Barbearia",       href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/barbearia-landing/index.html", icon: ICONES.tesoura },
    ],
  },
  servicos: {
    titulo: "Landings — serviços locais",
    subtitulo: "Páginas para oficinas, consultorias e outros serviços profissionais.",
    opcoes: [
      { label: "Oficina Mecânica",    href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/oficina-landing/index.html", icon: ICONES.ferramenta },
      { label: "Advocacia / jurídico", href: "https://DevCodeMind.github.io/Portif-lio-Profissional/projetos/advogado-landing/index.html", icon: ICONES.balanca },
    ],
  },
  proximo: {
    titulo: "Próximo slot de projeto",
    subtitulo: "Quando tiver mais landings, liste aqui como na área Saúde.",
    opcoes: [
      { label: "Destaque principal", emBreve: true, icon: ICONES.estrela },
      { label: "Segundo modelo",     emBreve: true, icon: ICONES.mais },
    ],
  },
};

const painel = document.getElementById("painel-opcoes");
const tituloEl = document.getElementById("painel-opcoes-titulo");
const subtituloEl = document.getElementById("painel-opcoes-subtitulo");
const cardsGridEl = document.getElementById("painel-cards-grid");
const DURACAO_FECHAR_MS = 280;

let ultimoBotaoCard = null;

function montarCards(opcoes) {
  cardsGridEl.innerHTML = "";
  opcoes.forEach(function (op) {
    const card = document.createElement("div");
    card.className = "painel-card";

    if (op.emBreve) {
      card.classList.add("painel-card--breve");
    }

    const icon = document.createElement("div");
    icon.className = "painel-card-icon";
    icon.innerHTML = op.icon;
    card.appendChild(icon);

    const title = document.createElement("h4");
    title.className = "painel-card-title";
    title.textContent = op.label;
    card.appendChild(title);

    if (op.href && !op.emBreve) {
      const link = document.createElement("a");
      link.href = op.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "painel-card-link";
      link.appendChild(card);
      cardsGridEl.appendChild(link);
    } else {
      const selo = document.createElement("span");
      selo.className = "painel-card-selo";
      selo.textContent = "em breve";
      card.appendChild(selo);
      cardsGridEl.appendChild(card);
    }
  });
}

function abrirPainel(chave) {
  const dados = PAINEL_DADOS[chave];
  if (!dados) return;

  ultimoBotaoCard = document.activeElement;

  tituloEl.textContent = dados.titulo;
  subtituloEl.textContent = dados.subtitulo;
  montarCards(dados.opcoes);

  painel.removeAttribute("hidden");
  painel.setAttribute("aria-hidden", "false");
  document.body.classList.add("painel-aberto");

  document.querySelectorAll(".ativador-card").forEach(function (btn) {
    btn.setAttribute("aria-expanded", btn.getAttribute("data-painel") === chave ? "true" : "false");
  });

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      painel.classList.add("painel-opcoes--visivel");
    });
  });

  const fecharBtn = painel.querySelector(".painel-opcoes__fechar");
  if (fecharBtn) fecharBtn.focus();
}

function fecharPainel() {
  painel.classList.remove("painel-opcoes--visivel");
  document.body.classList.remove("painel-aberto");

  document.querySelectorAll(".ativador-card").forEach(function (btn) {
    btn.setAttribute("aria-expanded", "false");
  });

  window.setTimeout(function () {
    painel.setAttribute("hidden", "");
    painel.setAttribute("aria-hidden", "true");
    cardsGridEl.innerHTML = "";
    if (ultimoBotaoCard && typeof ultimoBotaoCard.focus === "function") {
      ultimoBotaoCard.focus();
    }
    ultimoBotaoCard = null;
  }, DURACAO_FECHAR_MS);
}

document.querySelectorAll(".ativador-card").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const chave = btn.getAttribute("data-painel");
    if (chave) abrirPainel(chave);
  });
});

document.querySelectorAll("[data-fechar-painel]").forEach(function (el) {
  el.addEventListener("click", function () {
    fecharPainel();
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && painel.classList.contains("painel-opcoes--visivel")) {
    fecharPainel();
  }
});
