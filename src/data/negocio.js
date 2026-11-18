export const negocio = {
  nome: 'Barbearia Mombaque',
  desde: 2017,
  cidade: 'Sapucaia do Sul',
  bairro: 'Lomba da Palmeira',
  endereco: {
    rua: 'Rua Nair da Silva Rufino',
    bairro: 'Lomba da Palmeira',
    cidade: 'Sapucaia do Sul',
    uf: 'RS',
    cep: '93230-520',
  },
  telefoneDisplay: '(51) 99158-3219',
  whatsapp: '5551991583219',
  instagram: '@barbeariamombaque',
  instagramUrl: 'https://www.instagram.com/barbeariamombaque/',
  linktreeUrl: 'https://linktr.ee/barbeariamombaque',
  googleMapsUrl:
    'https://www.google.com/maps/place/Barbearia+Mombaque/@-29.8340418,-51.1286628,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x665ca2888ba4dba0!8m2!3d-29.8340866!4d-51.1286509',
};

export const whatsappLink = (
  mensagem = 'Olá! Vim pelo site e quero agendar um horário na Mombaque.',
) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const servicos = [
  {
    nome: 'Corte',
    descricao: 'Máquina, tesoura e acabamento na navalha. Do clássico ao degradê.',
    duracao: '45 min',
    preco: 'R$ 45',
  },
  {
    nome: 'Barba',
    descricao: 'Toalha quente, navalha e finalização com óleo.',
    duracao: '30 min',
    preco: 'R$ 35',
  },
  {
    nome: 'Corte + barba',
    descricao: 'O combo completo para sair com o visual no ponto.',
    duracao: '1h 15',
    preco: 'R$ 70',
  },
  {
    nome: 'Bigode',
    descricao: 'Aparo e desenho do bigode, com acabamento caprichado.',
    duracao: '15 min',
    preco: 'R$ 20',
  },
  {
    nome: 'Corte infantil',
    descricao: 'Paciência de sobra para o primeiro corte e para os próximos.',
    duracao: '30 min',
    preco: 'R$ 40',
  },
];

export const diferenciais = [
  {
    titulo: 'Tradição',
    texto: 'Navalha, toalha quente e o jeito de barbearia que não sai de moda.',
  },
  {
    titulo: 'Técnica',
    texto: 'Cada corte é pensado para o seu rosto, seu cabelo e sua rotina.',
  },
  {
    titulo: 'Prosa',
    texto: 'A cadeira é sua por um tempo. A conversa também.',
  },
];
