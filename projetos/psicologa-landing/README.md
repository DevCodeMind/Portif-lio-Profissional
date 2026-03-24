# Landing — Psicóloga

Landing page one-page para **psicologia**: hero em duas colunas, seções Sobre e Áreas com cards, faixa de contato — tipografia *DM Sans* + *Fraunces*, tema verde suave (modelo clássico do projeto).

## Como visualizar

Abra o arquivo `index.html` no navegador (duplo clique ou arrastar para Chrome/Edge).

Se o site for aberto a partir de outra pasta, use um servidor local na pasta pai para os links relativos funcionarem como em produção:

```bash
python -m http.server 8080
```

## O que personalizar

- **Nome** no header e rodapé (`Dra. Nome Sobrenome`)
- **CRP** nos badges e no rodapé
- Textos com colchetes, por exemplo `[sua faculdade]` e áreas de atuação
- **WhatsApp** no botão “Me chame aqui” da faixa final (`href` do `wa.me`)
- **E-mail** no rodapé

## Estrutura

```
psicologa-landing/
├── index.html   # HTML + CSS inline
└── README.md
```

## Tecnologias

- HTML5
- CSS (variáveis, layout responsivo, tudo no mesmo arquivo)

## Documentação geral

Padrão de README do repositório: ver `../README-ESTILO.md`.
