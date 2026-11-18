# Barbearia Mombaque (demo)

- **Cliente:** Barbearia Mombaque — *marca real usada em projeto demonstrativo, sem vínculo com a agência*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** [`tchesites/demo-barbearia-mombaque`](https://github.com/tchesites/demo-barbearia-mombaque)
- **Como rodar:** `npm install` e `npm run dev` (`http://localhost:4321/demo-barbearia-mombaque/`)

## Sobre

Site demonstrativo de uma página para a Barbearia Mombaque, de Sapucaia do
Sul/RS. A direção visual foi construída a partir da identidade pública do perfil
[@barbeariamombaque](https://www.instagram.com/barbeariamombaque/): fundo
marrom-cacau, brasão creme com bigode e o lettering de placa de barbearia.

**Não é o site oficial da barbearia.** Nome, endereço, telefone, Instagram e
foto da fachada são dados públicos usados para dar realismo ao demo; preços,
tempos de serviço, horários e textos são ilustrativos. O rodapé traz o aviso de
projeto demonstrativo.

## Dados usados

- **Endereço:** Rua Nair da Silva Rufino — Lomba da Palmeira, Sapucaia do Sul/RS — 93230-520
- **Telefone/WhatsApp:** (51) 99158-3219
- **Instagram:** [@barbeariamombaque](https://www.instagram.com/barbeariamombaque/)
- **Linktree:** [linktr.ee/barbeariamombaque](https://linktr.ee/barbeariamombaque)
- **Google Maps:** [Barbearia Mombaque](https://www.google.com/maps/place/Barbearia+Mombaque/@-29.8340418,-51.1286628,17z)
- **Serviços (da bio):** barba, cabelo, bigode e corte infantil; curso iniciante e produtos aparecem nos destaques do perfil.

Preços, durações e horários são **placeholders de demonstração** — a agenda é
combinada pelo WhatsApp.

## Identidade visual

- **Paleta:** cacau `#2b1810`, cacau profundo `#21120b`, creme `#f4e2b8`, palha `#cec793`, bronze `#b27a4a`, vermelho `#7d2c21`.
- **Tipografia:** Hepta Slab (títulos, mesma família usada no Linktree da marca) + Archivo (texto e interface).
- **Brasão:** recriado em SVG a partir do logo do perfil, com escudo, filete duplo, bigode e “desde 2017”.
- **Ícone de bigode:** Material Design Icons (`mdi:mustache`, Apache 2.0), usado no cabeçalho, no brasão, no favicon e na arte de compartilhamento.
- **Fotos:** banco de imagens Pexels (IDs 1813346, 3998415 e 20785318). A foto da fachada veio do perfil público no Linktree.

## Estrutura

```
demo-barbearia-mombaque/
├── astro.config.mjs
├── package.json
├── .github/workflows/deploy.yml
├── src/
│   ├── components/       # Header, Footer, Emblem
│   ├── data/negocio.js   # dados, serviços e links
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
  WhatsApp real da barbearia, sem prometer uma agenda que não existe.
- **Serviços em lista, não em cards:** a leitura fica mais direta e o hover
  inverte a linha, como uma placa de menu.
- **Brasão como elemento principal:** o escudo creme é o ativo mais reconhecível
  do perfil; ele aparece no hero, no favicon e no card de compartilhamento.
- **Preços ilustrativos:** valores e tempos são placeholders; o README e o rodapé
  deixam isso explícito.
- **Deploy de demo:** GitHub Pages via Actions, em
  `https://tchesites.github.io/demo-barbearia-mombaque/`.

## Deploy

**GitHub Pages**, por **GitHub Actions** (`.github/workflows/deploy.yml`): cada
push em `main` roda `npm ci` + `astro build` e publica o artefato.

- **URL:** <https://tchesites.github.io/demo-barbearia-mombaque/> — no ar.
- **Status:** publicado em 18/11/2026.
- **Base:** `/demo-barbearia-mombaque`; links internos via `url()`.
- **Setup:** repo público, topic `demo` e Pages em
  *Settings → Pages → Source = GitHub Actions*.

## Próximas alterações

- [ ] Se a Mombaque topar o projeto, trocar as fotos de banco de imagens por fotos reais do espaço e do time.
- [ ] Confirmar preços, tempos e horários antes de qualquer uso comercial.
- [ ] Avaliar uma seção de barbeiros (o perfil tem destaque “Barbeiros”).
- [ ] Se virar cliente real, renomear para `cliente-barbearia-mombaque`, tornar o repo privado e migrar o deploy para `projetos.tchesites.com.br`.
