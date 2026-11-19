// Prefixa caminhos internos com a base do site (`import.meta.env.BASE_URL`).
//
// No GitHub Pages o projeto fica em
// `https://tchesites.github.io/demo-barbearia-mandraque/`, então todo link
// interno precisa do prefixo `/demo-barbearia-mandraque`. Use sempre
// `url('/caminho/')` em `href` e `src`.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
