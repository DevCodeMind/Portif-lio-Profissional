# Guia de estilo dos README (README-ESTILO)

Use este padrão em **todos** os `README.md` dos projetos de landing e, se quiser, no portfólio. Objetivo: leitura rápida, sempre em **português**, sem texto longo desnecessário.

## Estrutura obrigatória

1. **Título** — `# Nome do projeto` (nome curto, igual ao título da página ou pasta).
2. **Uma linha** — O que é (uma frase).
3. **## Como visualizar** — Abrir `index.html` no navegador; opcional: servidor local com Python.
4. **## O que personalizar** — Lista com bullets: nome profissional, conselho (CRP/CRO/CRN/CRM), WhatsApp, e-mail, textos entre colchetes.
5. **## Estrutura** — Árvore mínima (`index.html` e, se existir, `css/`, `js/`).
6. **## Tecnologias** — Ex.: HTML, CSS (inline ou arquivo separado).

## Formatação

- Listas com `-`, não numeradas salvo passos ordenados.
- Caminhos e arquivos em crase: `` `index.html` ``.
- **Negrito** só para rótulos curtos dentro de uma linha, não em excesso.
- Sem emojis obrigatórios; opcional um no título se o time combinar.
- Última linha opcional: versão ou data, se fizer sentido.

## Variação entre landings (portfólio)

Cada demo de nicho pode ter **layout e tipografia próprios** (não apenas trocar texto e cor). Ao criar uma nova landing, defina um “modelo” (editorial, faixas, bento, institucional, etc.) para não repetir o mesmo `index.html` com outro tema.

## O que evitar

- Copiar o texto inteiro da landing para o README.
- Instruções genéricas (“melhore seu site”) sem ação concreta.
- Misturar inglês e português no mesmo parágrafo (termos técnicos `README`, `HTML` são aceitos).

## Modelo mínimo (copiar e preencher)

```markdown
# Título do projeto

Uma frase descrevendo a landing.

## Como visualizar

Abra o arquivo `index.html` no navegador (duplo clique).

## O que personalizar

- Nome e título profissional no topo e no rodapé
- Registro no conselho (ex.: CRP) e texto entre colchetes
- Link do WhatsApp e e-mail no rodapé e na seção de contato

## Estrutura

```
pasta-do-projeto/
└── index.html
```

## Tecnologias

- HTML
- CSS (estilos no mesmo arquivo ou em `css/`)
```

---

Arquivo de referência do repositório: **README-ESTILO.md** (este documento).
