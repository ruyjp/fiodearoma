const categoriasLayout = [
  {
    id: "corpoBanho",
    titulo: "Corpo & Banho",
    icone: "fa-bath",
    imagemBanner: "",
    subcategorias: [
      {
        id: "perfumados",
        titulo: "Sabonetes Perfumados",
        banner: "images/guiaSabonete.jpg",
      },
      {
        id: "especiais",
        titulo: "Sabonetes Especiais",
        banner: "images/guiaSabonete2.jpg",
      },
      {
        id: "geleia",
        titulo: "Geleias de Banho",
        banner: "",
      },
      {
        id: "colher",
        titulo: "Sabonete de Esfoliante",
        banner: "",
      },
      {
        id: "liquido",
        titulo: "Sabonete Líquido",
        banner: "",
      },
      {
        id: "especificos",
        titulo: "Sabonetes Específicos",
        banner: "images/guiaSabonete3.jpg",
      },
      {
        id: "energeticos",
        titulo: "Sabonetes Energéticos",
        banner: "images/guiaSabonete4.jpg",
      },
    ],
  },
  {
    id: "perfumaria",
    titulo: "Perfumaria",
    icone: "fa-spray-can-sparkles",
    subcategorias: [
      {
        id: "splash",
        titulo: "Body Splash",
      },
      {
        id: "perfume",
      },
      {
        id: "cabelo",
        titulo: "Perfume para Cabelo",
      },
    ],
  },
  {
    id: "masculina",
    titulo: "Linha Masculina",
    icone: "fa-mars",
    subcategorias: [
      {
        id: "barba",
        titulo: "Barba",
      },
      {
        id: "saboneteMasculino",
        titulo: "Sabonetes Masculinos",
      },
    ],
  },
  {
    id: "infantil",
    titulo: "Linha Infantil",
    icone: "fa-baby-carriage",
  },
  {
    id: "casa",
    titulo: "Aromas para Casa",
    icone: "fa-house-chimney",
    subcategorias: [
      {
        id: "tecido",
        titulo: "Água de Tecido",
      },
      {
        id: "homeSpray",
        titulo: "Home Spray",
      },
      {
        id: "difusor",
        titulo: "Difusor de Varetas",
      },
    ],
  },
  {
    id: "presentes",
    titulo: "Presentes",
    icone: "fa-gift",
  },
];

const produtos = [
  // 100 - Sabonetes Perfumados
  {
    id: 101,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Rosa Mosqueta",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/rosa-mosqueta.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 102,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Alecrim",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/alecrim.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 103,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Alecrim Blanc",
    desc: "Revitalização e hidratação",
    icon: "fa-leaf",
    imagemPrincipal: "images/alecrim-blanc.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 104,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Flor de Laranjeira",
    desc: "Conforto e hidratação",
    icon: "fa-spa",
    imagemPrincipal: "images/flor-laranjeira.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 105,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Algodão",
    desc: "Maciez e suavidade",
    icon: "fa-spa",
    imagemPrincipal: "images/algodao.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 106,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Bergamota",
    desc: "Revitalização e hidratação",
    icon: "fa-spa",
    imagemPrincipal: "images/bergamota.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 107,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Macadâmia",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/macadamia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 108,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Maracujá",
    desc: "Hidratação e suavidade.",
    icon: "fa-spa",
    imagemPrincipal: "images/maracuja.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 109,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Pitaya",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/pitaya.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 110,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Zarath",
    desc: "Revitalização e conforto.",
    icon: "fa-spa",
    imagemPrincipal: "images/zarath.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 111,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Limão Siciliano",
    desc: "Revitalização e hidratação.",
    icon: "fa-spa",
    imagemPrincipal: "images/limao-siciliano.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 112,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Canela",
    desc: "Hidratação e maciez",
    icon: "fa-spa",
    imagemPrincipal: "images/canela.jpg",
    variantes: [
      { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 },
    ],
  },
  {
    id: 113,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Lavanda Francesa",
    desc: "Suavidade, conforto e hidratação",
    icon: "fa-leaf",
    imagemPrincipal: "images/lavanda-francesa.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 114,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Erva-doce",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/erva-doce.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 115,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Morango",
    desc: "Maciez e hidratação",
    icon: "fa-leaf",
    imagemPrincipal: "images/morango.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 116,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Melancia",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/melancia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 117,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Menta",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/menta.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 118,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Camomila",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/camomila.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },

  // 200 - Sabonetes Especiais
  {
    id: 201,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Caipirinha",
    desc: "Hidratação e revitalização.",
    icon: "fa-glass-citrus",
    imagemPrincipal: "images/caipirinha.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 12.99,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 13.99,
      },
    ],
  },
  {
    id: 202,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Camomila & Lavanda Francesa",
    desc: "Suavidade e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/camomila-lavanda-francesa.jpg",
    variantes: [
      { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 },
    ],
  },
  {
    id: 207,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Majestade",
    desc: "Hidratação e revitalização.",
    icon: "fa-spa",
    imagemPrincipal: "images/majestade.jpg",
    variantes: [
      { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 },
    ],
  },
  {
    id: 208,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Melancia e menta",
    desc: "Hidratação e frescor.",
    icon: "fa-spa",
    imagemPrincipal: "images/melancia-menta.jpg",
    variantes: [
      { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 },
    ],
  },
  {
    id: 209,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Aveia e mel",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/aveia-mel.jpg",
    variantes: [
      { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
      { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
      { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 },
    ],
  },

  // 300 - Sabonetes Específicos
  {
    id: 301,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Enxofre",
    desc: "Para oleosidade e acne.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/enxofre.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Normal (100g)",
        preco: 11.99,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 15.99,
      },
    ],
  },
  {
    id: 302,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Enxofre, Açafrão & Argila Branca",
    desc: "Indicado para manchas.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/enxofre-acafrao-argila.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Normal (100g)",
        preco: 11.99,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 15.99 },
    ],
  },
  {
    id: 303,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Açafrão",
    desc: "Ação antioxidante.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/acafrao.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Retangular (100g)",
        preco: 11.99,
      },
      { idVar: "v2", nome: "Massageador (130g)", preco: 15.99 },
    ],
  },
  {
    id: 304,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Argila",
    desc: "Cuidado mineral.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/toda-argila.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Branca (70g)",
        preco: 9.99,
        imagem: "images/argila-branca.jpg",
      },
      {
        idVar: "v2",
        nome: "Verde (70g)",
        preco: 9.99,
        imagem: "images/argila-verde.jpg",
      },
      {
        idVar: "v3",
        nome: "Vermelha (70g)",
        preco: 9.99,
        imagem: "images/argila-vermelha.jpg",
      },
      {
        idVar: "v4",
        nome: "Roxa (70g)",
        preco: 9.99,
        imagem: "images/argila-roxa.jpg",
      },
      {
        idVar: "v5",
        nome: "Amarela (70g)",
        preco: 9.99,
        imagem: "images/argila-amarela.jpg",
      },
      {
        idVar: "v6",
        nome: "Azul (70g)",
        preco: 9.99,
        imagem: "images/argila-azul.jpg",
      },
      {
        idVar: "v7",
        nome: "Cinza (70g)",
        preco: 9.99,
        imagem: "images/argila-cinza.jpg",
      },
      {
        idVar: "v8",
        nome: "Creme (70g)",
        preco: 9.99,
        imagem: "images/argila-creme.jpg",
      },
      {
        idVar: "v9",
        nome: "Dourada (70g)",
        preco: 9.99,
        imagem: "images/argila-dourada.jpg",
      },
      {
        idVar: "v10",
        nome: "Marrom (70g)",
        preco: 9.99,
        imagem: "images/argila-marrom.jpg",
      },
      {
        idVar: "v11",
        nome: "Rosa (70g)",
        preco: 9.99,
        imagem: "images/argila-rosa.jpg",
      },
      {
        idVar: "v12",
        nome: "Dolomita (70g)",
        preco: 9.99,
        imagem: "images/argila-dolomita.jpg",
      },
      {
        idVar: "v13",
        nome: "Carvão Ativado (70g)",
        preco: 9.99,
        imagem: "images/argila-carvao-ativado.jpg",
      },
    ],
  },
  {
    id: 305,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Carvão & Branca",
    desc: "Purificante.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/branca-carvao.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Massageador (130g)",
        preco: 15.99,
      },
    ],
  },

  // 400 - Energéticos
  {
    id: 401,
    cat: "corpoBanho",
    subcat: "energeticos",
    nome: "Sabonete Energético",
    desc: "Limpeza energética pesada",
    icon: "fa-fire",
    imagemPrincipal: "images/sabonete-energetico.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Anil + Alecrim + Sal Grosso (100g)",
        preco: 12.29,
        imagem: "images/anil-alecrim-sal.jpg",
      },
      {
        idVar: "v2",
        nome: "Anil + Alecrim (100g)",
        preco: 11.99,
        imagem: "images/anil-alecrim.jpg",
      },
      {
        idVar: "v3",
        nome: "Alecrim + Sal Grosso (100g)",
        preco: 12.49,
        imagem: "images/alecrim-salgrosso.jpg",
      },
      {
        idVar: "v4",
        nome: "Anil + 7 Ervas (100g)",
        preco: 12.49,
        imagem: "images/anil-7ervas.jpg",
      },
      {
        idVar: "v5",
        nome: "Alecrim + Arruda (100g)",
        preco: 10.99,
        imagem: "images/alecrim-arruda.jpg",
      },
      {
        idVar: "v6",
        nome: "Xô Uruca - Arruda + Alecrim + Sal Grosso (100g)",
        preco: 11.49,
        imagem: "images/xo-uruca.jpg",
      },
    ],
  },

  // 500 - Perfumaria
  {
    id: 501,
    cat: "perfumaria",
    subcat: "splash",
    nome: "Body Splash (120ml)",
    desc: "Fragrância duradoura.",
    icon: "fa-spray-can",
    imagemPrincipal: "images/body-splash.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Acalanto",
        preco: 44.99,
        imagem: "images/body-acalanto.jpg",
      },
      {
        idVar: "v2",
        nome: "Majestade",
        preco: 44.99,
        imagem: "images/body-majestade.jpg",
      },
      {
        idVar: "v3",
        nome: "Veludo de Cereja",
        preco: 44.99,
        imagem: "images/body-veludo.jpg",
      },
      {
        idVar: "v4",
        nome: "Magnética",
        preco: 44.99,
        imagem: "images/body-magnetica.jpg",
      },
      {
        idVar: "v5",
        nome: "Instinto",
        preco: 44.99,
        imagem: "images/body-instinto.jpg",
      },
    ],
  },

  // 600 - Infantil
  {
    id: 601,
    cat: "infantil",
    nome: "Sabonetes Mami Baby",
    desc: "Fórmula suave",
    icon: "fa-child",
    imagemPrincipal: "images/mami-baby.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Rosa",
        preco: 10.99,
        imagem: "images/mami-baby-rosa.jpg",
      },
      {
        idVar: "v2",
        nome: "Azul",
        preco: 10.99,
        imagem: "images/mami-baby-azul.jpg",
      },
      {
        idVar: "v3",
        nome: "Verde",
        preco: 10.99,
        imagem: "images/mami-baby-verde.jpg",
      },
      {
        idVar: "v4",
        nome: "Roxo",
        preco: 10.99,
        imagem: "images/mami-baby-roxo.jpg",
      },
      {
        idVar: 'v5',
        nome: 'Amarelo',
        preco: 10.99,
        imagem: 'images/mami-baby-amarelo.jpg'
      },
    ],
  },
  // 700 - Geleias de Banho
  {
    id: 706,
    cat: "corpoBanho",
    subcat: "geleia",
    nome: "Geleias de Banho (200ml)",
    desc: "Hidratação e frescor",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/geleia-banho.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Limão Siciliano",
        preco: 29.99,
        imagem: "images/geleia-limao.jpg",
      },
      {
        idVar: "v2",
        nome: "Pitaya",
        preco: 29.99,
        imagem: "images/geleia-pitaya.jpg",
      },
      {
        idVar: "v3",
        nome: "Maracujá",
        preco: 29.99,
        imagem: "images/geleia-maracuja.jpg",
      },
      {
        idVar: "v4",
        nome: "Melancia",
        preco: 29.99,
        imagem: "images/geleia-melancia.jpg",
      },
      {
        idVar: "v5",
        nome: "Morango",
        preco: 29.99,
        imagem: "images/geleia-morango.jpg",
      },
    ],
  },

  // 800 - Sabonete Líquido
  {
    id: 801,
    cat: "corpoBanho",
    subcat: "liquido",
    nome: "Sabonete Líquido (100ml)",
    desc: "Hidratação e frescor",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/sabonete-liquido.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Erva Doce",
        preco: 14.99,
        imagem: "images/sabonete-liquido-erva.jpg",
      },
      {
        idVar: "v2",
        nome: "Flor de Cerejeira",
        preco: 14.99,
        imagem: "images/sabonete-liquido-cerejeira.jpg",
      },
      {
        idVar: "v3",
        nome: "Lavanda Francesa",
        preco: 14.99,
        imagem: "images/sabonete-liquido-lavanda.jpg",
      },
      {
        idVar: "v4",
        nome: "Rosa Mosqueta",
        preco: 14.99,
        imagem: "images/sabonete-liquido-rosa.jpg",
      },
      {
        idVar: "v5",
        nome: "Algodão",
        preco: 14.99,
        imagem: "images/sabonete-liquido-algodao.jpg",
      },
      {
        idVar: "v6",
        nome: "Maracujá",
        preco: 14.99,
        imagem: "images/sabonete-liquido-maracuja.jpg",
      },
    ],
  },

  // 900 - Sabonete de Esfoliante
  {
    id: 901,
    cat: "corpoBanho",
    subcat: "colher",
    nome: "Sabonete Esfoliante (150g)",
    desc: "Esfoliante e hidratante feito com manteiga corporal",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/sabonete-esfoliante.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Menta",
        preco: 19.99,
        imagem: "images/sabonete-esfoliante-menta.jpg",
      },
      {
        idVar: "v2",
        nome: "Maraacujá",
        preco: 19.99,
        imagem: "images/sabonete-esfoliante-maracuja.jpg",
      },
      {
        idVar: "v3",
        nome: "Morango",
        preco: 19.99,
        imagem: "images/sabonete-esfoliante-morango.jpg",
      },
    ],
  },

  // 1000 - Linha Masculina
  {
    id: 1001,
    cat: "masculina",
    subcat: "barba",
    nome: "Espuma de Barbear (100ml)",
    desc: "Produtos especialmente desenvolvidos para o cuidado masculino",
    icon: "fa-mars",
    imagemPrincipal: "images/espuma-barbear.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Espuma de Barbear",
        preco: 32.99,
        imagem: "images/espuma-barbear.jpg",
      },
    ],
  },
  {
    id: 1002,
    cat: "masculina",
    subcat: "barba",
    nome: "Loção Pós-Barba (100ml)",
    desc: "Produtos especialmente desenvolvidos para a hidratação e reparação da pele",
    icon: "fa-mars",
    imagemPrincipal: "images/pos-barba.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Loção Pós-Barba",
        preco: 22.99,
        imagem: "images/pos-barba.jpg",
      },
    ],
  },
  {
    id: 1003,
    cat: "masculina",
    subcat: "saboneteMasculino",
    nome: "Sabonetes Masculinos (100g)",
    desc: "Produtos especialmente desenvolvidos para o cuidado masculino",
    icon: "fa-mars",
    imagemPrincipal: "images/sabonete-masculino.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Acafrão (Barba diário)",
        preco: 11.99,
        imagem: "images/sabonete-masculino-acafrao.jpg",
      },
      {
        idVar: "v2",
        nome: "Menta c/ Sal (Pós treino)",
        preco: 10.99,
        imagem: "images/sabonete-masculino-menta.jpg",
      },
      {
        idVar: "v3",
        nome: "Alecrim Real (Banho diário)",
        preco: 10.99,
        imagem: "images/sabonete-masculino-alecrim.jpg",
      },
    ],
  },

  // 1100 - Aromas para Casa
  {
    id: 1101,
    cat: "casa",
    subcat: "tecido",
    nome: "Água de Tecido (100ml)",
    desc: "Fragrância para roupas e tecidos",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/agua-tecido.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Chá Branco",
        preco: 29.99,
        imagem: "images/agua-tecido-cha.jpg",
      },
      {
        idVar: "v2",
        nome: "Flor de Algodão",
        preco: 29.99,
        imagem: "images/agua-tecido-algodao.jpg",
      },
      {
        idVar: "v3",
        nome: "Lavanda Francesa",
        preco: 29.99,
        imagem: "images/agua-tecido-lavanda-francesa.jpg",
      },
      {
        idVar: "v4",
        nome: "Flor de Sândalo",
        preco: 29.99,
        imagem: "images/agua-tecido-sandalo.jpg",
      },
    ],
  },

  // 1200
  {
    id: 1102,
    cat: "casa",
    subcat: "tecido",
    nome: "Água de Tecido <u>(REFIL)</u><br> (O vidro precisa ser devolvido para ser enchido novamente)",
    desc: "Fragrância para roupas e tecidos",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/agua-tecido.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Refil",
        preco: 13.99,
        imagem: "images/agua-tecido.jpg",
      },
    ],
  },
  {
    id: 1201,
    cat: "casa",
    subcat: "homeSpray",
    nome: "Home Spray (100ml)",
    desc: "Perfume para o cômodos e ambiente",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/home-spray.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Lavanda Francesa",
        preco: 18.99,
        imagem: "images/homespray-lavandafrancesa.jpg",
      },
      {
        idVar: "v2",
        nome: "Chá Branco",
        preco: 18.99,
        imagem: "images/homespray-chabranco.jpg",
      },
      {
        idVar: "v3",
        nome: "Limão Doce",
        preco: 18.99,
        imagem: "images/homespray-limaodoce.jpg",
      },
    ],
  },

  //
];

let carrinho = JSON.parse(localStorage.getItem("carrinhoFioDeAroma")) || [];
let produtoSendoVisto = null;
let varianteSelecionada = null;
let qtdeSelecionada = 1;

function salvarCarrinho() {
  localStorage.setItem("carrinhoFioDeAroma", JSON.stringify(carrinho));
}

function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("open");
}

function atualizarInterfaceCarrinho() {
  const divItens = document.getElementById("cart-items");
  const labelCount = document.getElementById("cart-count");
  const labelTotal = document.getElementById("cart-total-price");
  if (!divItens) return;

  divItens.innerHTML = "";
  let totalSoma = 0;
  let totalQtd = 0;

  if (carrinho.length === 0) {
    divItens.innerHTML = `<div style="text-align:center; padding-top:50px;"><i class="fa-solid fa-bag-shopping" style="font-size:40px; color:#eee; margin-bottom:15px;"></i><p style="color:#888; font-style:italic;">Sua sacola está vazia.</p></div>`;
  } else {
    carrinho.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      totalSoma += subtotal;
      totalQtd += item.quantidade;
      divItens.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.nomeProduto}</h4>
                        <p>${item.nomeVariante}</p>
                        <div class="qty-wrapper">
                            <button class="qty-btn-cart" onclick="alterarQtdeCarrinho('${item.carrinhoId}', -1)"><i class="fas fa-minus"></i></button>
                            <span class="qty-number-cart">${item.quantidade}</span>
                            <button class="qty-btn-cart" onclick="alterarQtdeCarrinho('${item.carrinhoId}', 1)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="cart-item-right">
                        <span class="cart-item-price">R$ ${subtotal.toFixed(2).replace(".", ",")}</span>
                        <span class="remove-item" onclick="removerDoCarrinho('${item.carrinhoId}')"><i class="far fa-trash-alt"></i></span>
                    </div>
                </div>`;
    });
  }
  if (labelCount) labelCount.innerText = totalQtd;
  if (labelTotal)
    labelTotal.innerText = `R$ ${totalSoma.toFixed(2).replace(".", ",")}`;
}

function alterarQtdeCarrinho(id, n) {
  const i = carrinho.find((item) => item.carrinhoId === id);
  if (i) {
    i.quantidade += n;
    if (i.quantidade <= 0) removerDoCarrinho(id);
    salvarCarrinho();
    atualizarInterfaceCarrinho();
  }
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter((i) => i.carrinhoId !== id);
  salvarCarrinho();
  atualizarInterfaceCarrinho();
}

function checkoutWhatsApp() {
  if (carrinho.length === 0) return alert("Carrinho vazio!");
  let msg = "Olá! Gostaria de fazer um pedido na *Fio de Aroma* ✨:\n\n";
  carrinho.forEach(
    (i) =>
      (msg += `▪ *${i.quantidade}x ${i.nomeProduto}* (${i.nomeVariante}) - R$ ${(i.preco * i.quantidade).toFixed(2).replace(".", ",")}\n`),
  );
  const labelTotal = document.getElementById("cart-total-price").innerText;
  msg += `\n*TOTAL: ${labelTotal}*`;
  window.open(`https://wa.me/5522992668115?text=${encodeURIComponent(msg)}`);
}

function toggleMenu(e) {
  // Previne que o link '#' ou 'javascript:void(0)' suba a página
  e.preventDefault();

  if (window.innerWidth <= 768) {
    // Encontra o menu (dropdown-content) que é irmão do link clicado
    const dropdownContent = e.currentTarget.nextElementSibling;

    // Verifica se este já está aberto
    const isOpen = dropdownContent.classList.contains("mostrar-mobile");

    // Opcional: Fecha todos os outros menus abertos antes de abrir o atual
    document.querySelectorAll(".dropdown-content").forEach((el) => {
      el.classList.remove("mostrar-mobile");
    });

    // Se não estava aberto, abre agora
    if (!isOpen) {
      dropdownContent.classList.add("mostrar-mobile");
    }
  }
}

document.addEventListener("DOMContentLoaded", atualizarInterfaceCarrinho);
