# Barbearia Mandraque (demo)

- **Cliente:** Barbearia Mandraque — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** [`tchesites/demo-barbearia-mandraque`](https://github.com/tchesites/demo-barbearia-mandraque)
- **Como rodar:** `npm install` e `npm run dev` (`http://localhost:4321/demo-barbearia-mandraque/`)

## Sobre

Site demonstrativo de uma página para uma barbearia de bairro fictícia em
Canoas/RS. A identidade é original: selo circular creme com poste de barbeiro,
paleta de cacau e creme e tipografia slab. O objetivo é servir como modelo de
portfólio e base para novos clientes.

**Nada aqui é dado real de cliente:** nome, endereço, telefone, Instagram,
preços, horários e textos são inventados. A foto da fachada é de banco de
imagens e o rodapé traz o aviso de projeto demonstrativo.

## Dados fictícios

- **Endereço:** Rua das Acácias, 512 — Jardim das Acácias, Canoas/RS — 92300-000
- **Telefone/WhatsApp:** (51) 90000-0000
- **Instagram:** [@barbeariamandraque](https://www.instagram.com/) — handle fictício; o link leva à home do Instagram
- **Google Maps:** busca pelo endereço fictício
- **Serviços:** corte, barba, bigode, corte infantil e combo; curso iniciante e produtos aparecem como serviços extras
- **Preços e tempos:** ilustrativos, para demonstrar o layout

## Identidade visual

- **Paleta:** cacau `#2b1810`, cacau profundo `#21120b`, creme `#f4e2b8`, palha `#cec793`, bronze `#b27a4a`, vermelho `#7d2c21`.
- **Tipografia:** Hepta Slab (títulos) + Archivo (texto e interface).
- **Selo:** círculo creme com filete duplo, poste de barbeiro listrado e a inscrição “desde 2015”. Criado em SVG para o demo.
- **Derivações:** o poste do selo vira o ícone do cabeçalho, o favicon, o ícone de app e a marca d'água do CTA final.
- **Fotos:** banco de imagens Pexels (IDs 1813346, 3998415, 20785318 e 37318666, esta última a fachada ilustrativa).

## Estrutura

```
demo-barbearia-mandraque/
├── astro.config.mjs
├── package.json
├── .github/workflows/deploy.yml
├── src/
│   ├── components/       # Header, Footer, Emblem
│   ├── data/negocio.js   # dados fictícios, serviços e links
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   ├── styles/           # tokens.css + global.css
│   └── utils/url.js
├── public/
│   ├── fotos/            # imagens servidas pelo site
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── assets/               # originais das imagens
├── docs/
│   └── 2026-11-18-design.md
└── README.md
```

## Decisões

- **Uma página, sem sistema de agendamento:** o demo mostra o serviço e leva ao
  WhatsApp fictício, sem prometer uma agenda que não existe.
- **Serviços em lista, não em cards:** leitura direta e hover que inverte a
  linha, como uma placa de menu.
- **Selo como elemento principal:** o poste de barbeiro é o símbolo mais
  reconhecível do universo da barbearia e aparece no hero, no favicon e no card
  de compartilhamento.
- **Dados 100% fictícios:** endereço, telefone, Instagram, preços e horários
  são inventados; o rodapé e este README deixam isso explícito.
- **Deploy de demo:** GitHub Pages via Actions, em
  `https://tchesites.github.io/demo-barbearia-mandraque/`.

## Deploy

**GitHub Pages**, por **GitHub Actions** (`.github/workflows/deploy.yml`): cada
push em `main` roda `npm ci` + `astro build` e publica o artefato.

- **URL:** <https://tchesites.github.io/demo-barbearia-mandraque/> — no ar.
- **Status:** publicado em 19/11/2026.
- **Base:** `/demo-barbearia-mandraque`; links internos via `url()`.
- **Setup:** repo público, topic `demo` e Pages em
  *Settings → Pages → Source = GitHub Actions*.

## Próximas alterações

- [ ] Trocar as fotos de banco de imagens por fotos reais se o demo virar cliente.
- [ ] Confirmar preços, tempos e horários antes de qualquer uso comercial.
- [ ] Avaliar uma seção de barbeiros e uma galeria de cortes.
- [ ] Se virar cliente real, renomear para `cliente-barbearia-mandraque`, tornar o repo privado e migrar o deploy para `projetos.tchesites.com.br`.
