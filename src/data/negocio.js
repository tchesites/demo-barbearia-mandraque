export const negocio = {
  nome: 'Barbearia Mandraque',
  desde: 2015,
  cidade: 'Canoas',
  bairro: 'Jardim das Acácias',
  endereco: {
    rua: 'Rua das Acácias, 512',
    bairro: 'Jardim das Acácias',
    cidade: 'Canoas',
    uf: 'RS',
    cep: '92300-000',
  },
  telefoneDisplay: '(51) 90000-0000',
  whatsapp: '5551900000000',
  instagram: '@barbeariamandraque',
  instagramUrl: 'https://www.instagram.com/',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+das+Ac%C3%A1cias%2C+512%2C+Canoas%2C+RS',
};

export const whatsappLink = (
  mensagem = 'Olá! Vim pelo site e quero agendar um horário na Mandraque.',
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
