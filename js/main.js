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
    } else {
      entry.target.classList.remove('animate-in');
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

/**
 * Cada chave corresponde a data-painel no card.
 * href: link da demo · emBreve: só mostra rótulo (sem link)
 */
const PAINEL_DADOS = {
  saude: {
    titulo: "Landings — área da saúde",
    subtitulo: "Escolha uma demonstração para abrir em nova aba. As demais você pode ir publicando com o tempo.",
    opcoes: [
      { label: "Psicologia / consultório", href: "../psicologa-landing/index.html", icon: "🧠" },
      { label: "Odontologia / dentista", href: "../odontologia-landing/index.html", icon: "🦷" },
      { label: "Nutrição", href: "../nutricao-landing/index.html", icon: "🥗" },
      { label: "Clínica / agenda médica", href: "../clinica-landing/index.html", icon: "🏥" },
    ],
  },
  fitness: {
    titulo: "Landings — fitness e bem-estar",
    subtitulo: "Páginas para personal trainers e profissionais de saúde física.",
    opcoes: [
      { label: "Personal Trainer", href: "../personal-landing/index.html", icon: "💪" },
    ],
  },
  beleza: {
    titulo: "Landings — beleza e estética",
    subtitulo: "Páginas para salões de beleza, barbearias e profissionais de estética.",
    opcoes: [
      { label: "Salão de Beleza", href: "../beleza-landing/index.html", icon: "💅" },
      { label: "Barbearia", href: "../barbearia-landing/index.html", icon: "✂️" },
    ],
  },
  servicos: {
    titulo: "Landings — serviços locais",
    subtitulo: "Páginas para oficinas, consultorias e outros serviços profissionais.",
    opcoes: [
      { label: "Oficina Mecânica", href: "../oficina-landing/index.html", icon: "🔧" },
      { label: "Advocacia / jurídico", href: "../advogado-landing/index.html", icon: "⚖️" },
    ],
  },
  proximo: {
    titulo: "Próximo slot de projeto",
    subtitulo: "Quando tiver mais landings, liste aqui como na área Saúde — por enquanto são placeholders.",
    opcoes: [
      { label: "Destaque principal", emBreve: true, icon: "⭐" },
      { label: "Segundo modelo", emBreve: true, icon: "📈" },
    ],
  },
  nichos: {
    titulo: "Landings por nicho",
    subtitulo: "Exemplos que você pode desenvolver e depois ligar a demos reais neste painel.",
    opcoes: [
      { label: "Jurídico / advogado", href: "../advogado-landing/index.html", icon: "⚖️" },
      { label: "Fitness / personal trainer", href: "../personal-landing/index.html", icon: "💪" },
      { label: "Beleza / estética", href: "../beleza-landing/index.html", icon: "💅" },
      { label: "Serviços locais (oficina, barbearia…)", href: "../oficina-landing/index.html", icon: "🔧" },
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
    icon.textContent = op.icon;
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
