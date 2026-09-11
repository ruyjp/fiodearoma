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
        titulo: "Geleias de Banho Esfoliante",
        banner: "",
      },
      {
        id: "colher",
        titulo: "Sabonete Esfoliante",
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
      {
        id: "carro",
        titulo: "Aromatizador de Carro",
      },
    ],
  },
  {
    id: "presentes",
    titulo: "Presentes",
    icone: "fa-gift",
    subcategorias: [
      {
        id: "kits",
        titulo: "Kits",
      },
      {
        id: "lembrancinha",
        titulo: "Lembrancinhas",
      },
    ],
  },
  {
    id: "vela",
    titulo: "Velas Artesanais",
    icone: "fa-gift",
    subcategorias: [
      {
        id: "velaPerfumada",
        titulo: "Velas Perfumadas",
      },
      {
        id: "vela",
        titulo: "Velas Temáticas",
      },
    ],
  },
];

const produtos = [
  {
    id: 1,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Rosa Mosqueta",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/rosa-mosqueta.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 2,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Alecrim",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/alecrim.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 3,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Alecrim Blanc",
    desc: "Revitalização e hidratação",
    icon: "fa-leaf",
    imagemPrincipal: "images/alecrim-blanc.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 4,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Flor de Laranjeira",
    desc: "Conforto e hidratação",
    icon: "fa-spa",
    imagemPrincipal: "images/flor-laranjeira.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 5,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Algodão",
    desc: "Maciez e suavidade",
    icon: "fa-spa",
    imagemPrincipal: "images/algodao.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 6,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Bergamota",
    desc: "Revitalização e hidratação",
    icon: "fa-spa",
    imagemPrincipal: "images/bergamota.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 7,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Macadâmia",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/macadamia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 8,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Esfoliante de Maracujá",
    desc: "Hidratação e suavidade.",
    icon: "fa-spa",
    imagemPrincipal: "images/maracuja.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 9,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Esfoliante de Pitaya",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/pitaya.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 10,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Zarath",
    desc: "Revitalização e conforto.",
    icon: "fa-spa",
    imagemPrincipal: "images/zarath.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 11,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Limão Siciliano",
    desc: "Revitalização e hidratação.",
    icon: "fa-spa",
    imagemPrincipal: "images/limao-siciliano.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 12,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Canela",
    desc: "Hidratação e maciez",
    icon: "fa-spa",
    imagemPrincipal: "images/canela.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 14.99,
      },
    ],
  },
  {
    id: 13,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Lavanda Francesa",
    desc: "Suavidade, conforto e hidratação",
    icon: "fa-leaf",
    imagemPrincipal: "images/lavanda-francesa.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 14,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Esfoliante de Erva-doce",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/erva-doce.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 15,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Esfoliante de Morango",
    desc: "Maciez e hidratação",
    icon: "fa-leaf",
    imagemPrincipal: "images/morango.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 16,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Esfoliante de Melancia",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/melancia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 17,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Menta",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/menta.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 18,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete de Camomila",
    desc: "Revitalização e frescor.",
    icon: "fa-leaf",
    imagemPrincipal: "images/camomila.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 14.99,
      },
    ],
  },
  {
    id: 19,
    cat: "corpoBanho",
    subcat: "perfumados",
    nome: "Sabonete Flor de Cerejeira",
    desc: "Suavidade e bem-estar.",
    icon: "fa-leaf",
    imagemPrincipal: "images/sabonete-florcerejeira.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 10.99,
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
    id: 20,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete de Caipirinha",
    desc: "Hidratação e revitalização.",
    icon: "fa-glass-citrus",
    imagemPrincipal: "images/caipirinha.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 21,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete de Camomila & Lavanda Francesa",
    desc: "Suavidade e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/camomila-lavanda-francesa.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 22,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete Majestade",
    desc: "Hidratação e revitalização.",
    icon: "fa-spa",
    imagemPrincipal: "images/majestade.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 23,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete Esfoliante de Melancia e menta",
    desc: "Hidratação e frescor.",
    icon: "fa-spa",
    imagemPrincipal: "images/melancia-menta.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 24,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete de Aveia e mel",
    desc: "Hidratação e maciez.",
    icon: "fa-spa",
    imagemPrincipal: "images/aveia-mel.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 25,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete de Cereja & Bergamota",
    desc: "Hidratação e suavidade",
    icon: "fa-spa",
    imagemPrincipal: "images/sabonete-cereja-bergamota.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 26,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete Esfoliante de Morango Cremoso",
    desc: "Hidratação e suavidade",
    icon: "fa-spa",
    imagemPrincipal: "images/sabonete-morango-cremoso.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 27,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete de Menta & Alecrim",
    desc: "Hidratação e revitalização",
    icon: "fa-spa",
    imagemPrincipal: "images/sabonete-menta-alecrim.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 28,
    cat: "corpoBanho",
    subcat: "especiais",
    nome: "Sabonete Veludo de Cereja",
    desc: "Hidratação e suavidade",
    icon: "fa-spa",
    imagemPrincipal: "images/sabonete-veludo-cereja.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Redondo (90g)",
        preco: 11.49,
      },
      {
        idVar: "v2",
        nome: "Massageador (130g)",
        preco: 13.49,
      },
      {
        idVar: "v3",
        nome: "Massageador com Bucha (130g)",
        preco: 14.49,
      },
    ],
  },
  {
    id: 29,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete de Enxofre (100g)",
    desc: "Para oleosidade e acne.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/enxofre.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 11.99,
      },
    ],
  },
  {
    id: 30,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete Enxofre, Açafrão & Argila Branca",
    desc: "Indicado para manchas.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/enxofre-acafrao-argila.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Massageador (130g)",
        preco: 15.99,
      },
    ],
  },
  {
    id: 31,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete de Açafrão (100g)",
    desc: "Ação antioxidante.",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/acafrao.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 11.99,
      },
    ],
  },
  {
    id: 32,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete de Argila",
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
    ],
  },
  {
    id: 33,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete Carvão Ativado (70g)",
    desc: "",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/argila-carvao-ativado.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 10.69,
        imagem: "images/argila-carvao-ativado.jpg",
      },
    ],
  },
  {
    id: 34,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete de Dolomita (70g)",
    desc: "",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/argila-dolomita.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 10.99,
        imagem: "images/argila-dolomita.jpg",
      },
    ],
  },
  {
    id: 35,
    cat: "corpoBanho",
    subcat: "especificos",
    nome: "Sabonete Carvão Ativado & Argila Branca",
    desc: "Purificante",
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
  {
    id: 36,
    cat: "corpoBanho",
    subcat: "energeticos",
    nome: "Sabonetes Energéticos",
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
        preco: 11.29,
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

  {
    id: 37,
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
  {
    id: 38,
    cat: "perfumaria",
    subcat: "splash",
    nome: "Body Splash (REFIL)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/body-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Acalanto",
        preco: 35.99,
        imagem: "images/body-acalanto.jpg",
      },
      {
        idVar: "v2",
        nome: "Majestade",
        preco: 35.99,
        imagem: "images/body-majestade.jpg",
      },
      {
        idVar: "v3",
        nome: "Veludo de Cereja",
        preco: 35.99,
        imagem: "images/body-veludo.jpg",
      },
      {
        idVar: "v4",
        nome: "Magnética",
        preco: 35.99,
        imagem: "images/body-magnetica.jpg",
      },
      {
        idVar: "v5",
        nome: "Instinto",
        preco: 35.99,
        imagem: "images/body-instinto.jpg",
      },
    ],
  },
  {
    id: 39,
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
        idVar: "v5",
        nome: "Amarelo",
        preco: 10.99,
        imagem: "images/mami-baby-amarelo.jpg",
      },
    ],
  },
  {
    id: 40,
    cat: "corpoBanho",
    subcat: "geleia",
    nome: "Geleias de Banho Esfoliante (200ml)",
    desc: "Hidratação e frescor",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/geleia-banho.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Limão Siciliano",
        preco: 24.99,
        imagem: "images/geleia-limao.jpg",
      },
      {
        idVar: "v2",
        nome: "Pitaya",
        preco: 24.99,
        imagem: "images/geleia-pitaya.jpg",
      },
      {
        idVar: "v3",
        nome: "Maracujá",
        preco: 24.99,
        imagem: "images/geleia-maracuja.jpg",
      },
      {
        idVar: "v4",
        nome: "Melancia",
        preco: 24.99,
        imagem: "images/geleia-melancia.jpg",
      },
      {
        idVar: "v5",
        nome: "Morango",
        preco: 24.99,
        imagem: "images/geleia-morango.jpg",
      },
    ],
  },
  {
    id: 41,
    cat: "corpoBanho",
    subcat: "geleia",
    nome: "Geleia de Banho Esfoliante (Refil)",
    desc: "Esfoliante e hidratante feito com manteiga corporal",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/geleia-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Limão Siciliano",
        preco: 19.99,
        imagem: "images/geleia-limao.jpg",
      },
      {
        idVar: "v2",
        nome: "Pitaya",
        preco: 19.99,
        imagem: "images/geleia-pitaya.jpg",
      },
      {
        idVar: "v3",
        nome: "Maracujá",
        preco: 19.99,
        imagem: "images/geleia-maracuja.jpg",
      },
      {
        idVar: "v4",
        nome: "Melancia",
        preco: 19.99,
        imagem: "images/geleia-melancia.jpg",
      },
      {
        idVar: "v5",
        nome: "Morango",
        preco: 19.99,
        imagem: "images/geleia-morango.jpg",
      },
    ],
  },
  {
    id: 42,
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
  {
    id: 43,
    cat: "corpoBanho",
    subcat: "liquido",
    nome: "Sabonete Liquido (Refil)",
    desc: "Esfoliante e hidratante feito com manteiga corporal",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/sabonete-liquido-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Erva Doce",
        preco: 11.39,
        imagem: "images/sabonete-liquido-erva.jpg",
      },
      {
        idVar: "v2",
        nome: "Flor de Cerejeira",
        preco: 11.39,
        imagem: "images/sabonete-liquido-cerejeira.jpg",
      },
      {
        idVar: "v3",
        nome: "Lavanda Francesa",
        preco: 11.39,
        imagem: "images/sabonete-liquido-lavanda.jpg",
      },
      {
        idVar: "v4",
        nome: "Rosa Mosqueta",
        preco: 11.39,
        imagem: "images/sabonete-liquido-rosa.jpg",
      },
      {
        idVar: "v5",
        nome: "Algodão",
        preco: 11.39,
        imagem: "images/sabonete-liquido-algodao.jpg",
      },
      {
        idVar: "v6",
        nome: "Maracujá",
        preco: 11.39,
        imagem: "images/sabonete-liquido-maracuja.jpg",
      },
    ],
  },
  {
    id: 44,
    cat: "corpoBanho",
    subcat: "colher",
    nome: "Sabonete de Colher Esfoliante (150g)",
    desc: "Esfoliante e hidratante feito com manteiga corporal",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/sabonete-esfoliante.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Menta",
        preco: 29.99,
        imagem: "images/sabonete-esfoliante-menta.jpg",
      },
      {
        idVar: "v2",
        nome: "Maraacujá",
        preco: 29.99,
        imagem: "images/sabonete-esfoliante-maracuja.jpg",
      },
      {
        idVar: "v3",
        nome: "Morango",
        preco: 29.99,
        imagem: "images/sabonete-esfoliante-morango.jpg",
      },
    ],
  },
  {
    id: 45,
    cat: "corpoBanho",
    subcat: "colher",
    nome: "Sabonete de Colher Esfoliante (Refil)",
    desc: "Esfoliante e hidratante feito com manteiga corporal",
    icon: "fa-bottle-droplet",
    imagemPrincipal: "images/sabonete-esfoliante-refil.jpg",
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
  {
    id: 46,
    cat: "masculina",
    subcat: "barba",
    nome: "Espuma de Barbear (100ml)",
    desc: "Produtos especialmente desenvolvidos para o cuidado masculino",
    icon: "fa-mars",
    imagemPrincipal: "images/espuma-barbear.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 32.99,
        imagem: "images/espuma-barbear.jpg",
      },
    ],
  },
  {
    id: 47,
    cat: "masculina",
    subcat: "barba",
    nome: "Loção Pós-Barba (100ml)",
    desc: "Produtos especialmente desenvolvidos para a hidratação e reparação da pele",
    icon: "fa-mars",
    imagemPrincipal: "images/pos-barba.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 22.99,
        imagem: "images/pos-barba.jpg",
      },
    ],
  },
  {
    id: 48,
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
        nome: "Menta c/ Sal Grosso (Pós treino)",
        preco: 11.39,
        imagem: "images/sabonete-masculino-menta.jpg",
      },
      {
        idVar: "v3",
        nome: "Alecrim Real - Blanc (Banho diário)",
        preco: 10.99,
        imagem: "images/sabonete-masculino-alecrim.jpg",
      },
    ],
  },
  {
    id: 49,
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
        preco: 22.99,
        imagem: "images/agua-tecido-cha.jpg",
      },
      {
        idVar: "v2",
        nome: "Flor de Algodão",
        preco: 22.99,
        imagem: "images/agua-tecido-algodao.jpg",
      },
      {
        idVar: "v3",
        nome: "Lavanda Francesa",
        preco: 22.99,
        imagem: "images/agua-tecido-lavanda-francesa.jpg",
      },
      {
        idVar: "v4",
        nome: "Flor de Sândalo",
        preco: 22.99,
        imagem: "images/agua-tecido-sandalo.jpg",
      },
    ],
  },
  {
    id: 50,
    cat: "casa",
    subcat: "tecido",
    nome: "Água de Tecido (REFIL)",
    desc: "Fragrância para roupas e tecidos",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/agua-tecido-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Chá Branco",
        preco: 15.99,
        imagem: "images/agua-tecido-cha.jpg",
      },
      {
        idVar: "v2",
        nome: "Flor de Algodão",
        preco: 15.99,
        imagem: "images/agua-tecido-algodao.jpg",
      },
      {
        idVar: "v3",
        nome: "Lavanda Francesa",
        preco: 15.99,
        imagem: "images/agua-tecido-lavanda-francesa.jpg",
      },
      {
        idVar: "v4",
        nome: "Flor de Sândalo",
        preco: 15.99,
        imagem: "images/agua-tecido-sandalo.jpg",
      },
    ],
  },
  {
    id: 51,
    cat: "casa",
    subcat: "homeSpray",
    nome: "Home Spray (100ml)",
    desc: "Perfume para cômodos e ambiente",
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
  {
    id: 52,
    cat: "casa",
    subcat: "homeSpray",
    nome: "Home Spray (REFIL)",
    desc: "Perfume para o cômodos e ambiente",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/homespray-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Lavanda Francesa",
        preco: 13.99,
        imagem: "images/homespray-lavandafrancesa.jpg",
      },
      {
        idVar: "v2",
        nome: "Chá Branco",
        preco: 13.99,
        imagem: "images/homespray-chabranco.jpg",
      },
      {
        idVar: "v3",
        nome: "Limão Doce",
        preco: 13.99,
        imagem: "images/homespray-limaodoce.jpg",
      },
    ],
  },
  {
    id: 53,
    cat: "casa",
    subcat: "difusor",
    nome: "Difusor de Varetas (100ml)",
    desc: "Aromas para cômodos e ambiente",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/difusor.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Lavanda Francesa",
        preco: 24.99,
        imagem: "images/difusor-lavandafrancesa.jpg",
      },
      {
        idVar: "v2",
        nome: "Limão Doce",
        preco: 24.99,
        imagem: "images/difusor-limaodoce.jpg",
      },
      {
        idVar: "v3",
        nome: "Chá Branco",
        preco: 24.99,
        imagem: "images/difusor-chabranco.jpg",
      },
      {
        idVar: "v4",
        nome: "Bamboo",
        preco: 24.99,
        imagem: "images/difusor-bamboo.jpg",
      },
    ],
  },
  {
    id: 55,
    cat: "casa",
    subcat: "difusor",
    nome: "Difusore de Varetas (REFIL)",
    desc: "Perfume para o cômodos e ambiente",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/difusor-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Lavanda Francesa",
        preco: 17.99,
        imagem: "images/difusor-lavandafrancesa.jpg",
      },
      {
        idVar: "v2",
        nome: "Limão Doce",
        preco: 17.99,
        imagem: "images/difusor-limaodoce.jpg",
      },
      {
        idVar: "v3",
        nome: "Chá Branco",
        preco: 17.99,
        imagem: "images/difusor-chabranco.jpg",
      },
      {
        idVar: "v4",
        nome: "Bamboo",
        preco: 17.99,
        imagem: "images/difusor-bamboo.jpg",
      },
    ],
  },
  {
    id: 56,
    cat: "vela",
    subcat: "velaPerfumada",
    nome: "Vela G (130g)",
    desc: "Perfume e decoração para o seu ambiente",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/velaG.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Sândalo",
        preco: 29.99,
        imagem: "images/velaG-sandalo.jpg",
      },
      {
        idVar: "v2",
        nome: "Verbena",
        preco: 29.99,
        imagem: "images/velaG-verbena.jpg",
      },
      {
        idVar: "v3",
        nome: "Bamboo",
        preco: 29.99,
        imagem: "images/velaG-bamboo.jpg",
      },
      {
        idVar: "v4",
        nome: "Canela",
        preco: 29.99,
        imagem: "images/velaG-canela.jpg",
      },
      {
        idVar: "v5",
        nome: "Limão Siciliano",
        preco: 29.99,
        imagem: "images/velaG-limaosiciliano.jpg",
      },
      {
        idVar: "v6",
        nome: "Flor de Algodão",
        preco: 29.99,
        imagem: "images/velaG-floralgodao.jpg",
      },
      {
        idVar: "v7",
        nome: "Fita de Vanilla",
        preco: 29.99,
        imagem: "images/velaG-fitavanilla.jpg",
      },
      {
        idVar: "v8",
        nome: "Lavanda Francesa",
        preco: 29.99,
        imagem: "images/velaG-lavandafrancesa.jpg",
      },
      {
        idVar: "v9",
        nome: "Morango com Champanhe",
        preco: 29.99,
        imagem: "images/velaG-morangochampanhe.jpg",
      },
    ],
  },
  {
    id: 57,
    cat: "vela",
    subcat: "velaPerfumada",
    nome: "Vela Especial<br> Morango com Champanhe (150g) ",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/velaG-especialmorango.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 34.99,
      },
    ],
  },
  {
    id: 58,
    cat: "vela",
    subcat: "velaPerfumada",
    nome: "Vela G (REFIL)",
    desc: "Perfume e decoração para cômodos e ambientes",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/velaG-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Sândalo",
        preco: 19.99,
        imagem: "images/velaG-sandalo.jpg",
      },
      {
        idVar: "v2",
        nome: "Verbena",
        preco: 19.99,
        imagem: "images/velaG-verbena.jpg",
      },
      {
        idVar: "v3",
        nome: "Bamboo",
        preco: 19.99,
        imagem: "images/velaG-bamboo.jpg",
      },
      {
        idVar: "v4",
        nome: "Canela",
        preco: 19.99,
        imagem: "images/velaG-canela.jpg",
      },
      {
        idVar: "v5",
        nome: "Limão Siciliano",
        preco: 19.99,
        imagem: "images/velaG-limaosiciliano.jpg",
      },
      {
        idVar: "v6",
        nome: "Flor de Algodão",
        preco: 19.99,
        imagem: "images/velaG-floralgodao.jpg",
      },
      {
        idVar: "v7",
        nome: "Fita de Vanilla",
        preco: 19.99,
        imagem: "images/velaG-fitavanilla.jpg",
      },
      {
        idVar: "v8",
        nome: "Lavanda Francesa",
        preco: 19.99,
        imagem: "images/velaG-lavandafrancesa.jpg",
      },
      {
        idVar: "v9",
        nome: "Morango com Champanhe",
        preco: 19.99,
        imagem: "images/velaG-morangochampanhe.jpg",
      },
    ],
  },
  {
    id: 59,
    cat: "casa",
    subcat: "carro",
    nome: "Aromatizador de carro",
    desc: "Perfume e decoração automotiva",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/carro.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Carro Novo",
        preco: 14.99,
        imagem: "images/carro-novo.jpg",
      },
      {
        idVar: "v2",
        nome: "Limão Siciliano",
        preco: 14.99,
        imagem: "images/carro-limaosiciliano.jpg",
      },
    ],
  },
  {
    id: 60,
    cat: "casa",
    subcat: "carro",
    nome: "Aromatizador de carro (REFIL)",
    desc: "Perfume e decoração automotiva",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/carro-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "Carro Novo",
        preco: 9.99,
        imagem: "images/carro-novo.jpg",
      },
      {
        idVar: "v2",
        nome: "Limão Siciliano",
        preco: 9.99,
        imagem: "images/carro-limaosiciliano.jpg",
      },
    ],
  },
  {
    id: 61,
    cat: "perfumaria",
    subcat: "cabelo",
    nome: "(EM BREVE) Perfume de Cabelo",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/em-breve.webp",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 0.0,
        imagem: "images/em-breve.webp",
      },
    ],
  },
  {
    id: 62,
    cat: "perfumaria",
    subcat: "cabelo",
    nome: "(EM BREVE) Perfume de cabelo (REFIL)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/em-breve.webp",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 0,
        imagem: "images/em-breve.webp",
      },
    ],
  },

  {
    id: 63,
    cat: "presentes",
    subcat: "kits",
    nome: "UM Sabonete sortido<br> +<br> UMA Bucha de Nylon",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit1.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 19.99,
        imagem: "images/kit1.jpg",
      },
    ],
  },
  {
    id: 64,
    cat: "presentes",
    subcat: "kits",
    nome: "TRÊS Sabonetes de frutas sortidos<br> +<br> UMA Bucha de Nylon",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit2.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 35.99,
        imagem: "images/kit2.jpg",
      },
    ],
  },
  {
    id: 65,
    cat: "presentes",
    subcat: "kits",
    nome: "QUATRO Sabonetes sortidos",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit3.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 42.99,
        imagem: "images/kit3.jpg",
      },
    ],
  },
  {
    id: 66,
    cat: "presentes",
    subcat: "kits",
    nome: "CINCO Sabonetes de frutas sortidos",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit4.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 49.99,
        imagem: "images/kit4.jpg",
      },
    ],
  },
  {
    id: 67,
    cat: "presentes",
    subcat: "kits",
    nome: "Copo com UM Cacho de Sabonete",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit5.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 29.99,
        imagem: "images/kit5.jpg",
      },
    ],
  },
  {
    id: 68,
    cat: "presentes",
    subcat: "kits",
    nome: "Caixa com UM Cacho de Sabonete",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit6.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 34.99,
        imagem: "images/kit6.jpg",
      },
    ],
  },
  {
    id: 69,
    cat: "presentes",
    subcat: "kits",
    nome: "Kit de Algodão",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit7.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 48.99,
        imagem: "images/kit7.jpg",
      },
    ],
  },
  {
    id: 70,
    cat: "presentes",
    subcat: "kits",
    nome: "Monte seu Kit",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/kit8.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 0,
        imagem: "images/kit8.jpg",
      },
    ],
  },

  {
    id: 71,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "15 Anos",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/15anos.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 2.5,
        imagem: "images/15anos.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 2.3,
        imagem: "images/15anos.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 2.1,
        imagem: "images/15anos.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 1.95,
        imagem: "images/15anos.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 1.8,
        imagem: "images/15anos.jpg",
      },
    ],
  },

  {
    id: 72,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Pezinhos",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/pezinhos.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 2.5,
        imagem: "images/pezinhos.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 2.3,
        imagem: "images/pezinhos.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 2.1,
        imagem: "images/pezinhos.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 1.95,
        imagem: "images/pezinhos.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 1.8,
        imagem: "images/pezinhos.jpg",
      },
    ],
  },
  {
    id: 73,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Vela Peônia (30g)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/velaG-peonia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 10.99,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 10.26,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 40 unidades",
        preco: 9.76,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v4",
        nome: "41 a 50 unidades",
        preco: 9.29,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 8.89,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 8.29,
        imagem: "images/velaG-peonia.jpg",
      },
    ],
  },
  {
    id: 74,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Vela Peônia (30g) na CAIXA",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/lembrancinha-peonia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 13.99,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 13.26,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 40 unidades",
        preco: 12.76,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v4",
        nome: "41 a 50 unidades",
        preco: 12.29,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 11.89,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 11.29,
        imagem: "images/lembrancinha-peonia.jpg",
      },
    ],
  },
  {
    id: 75,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Letra em Cubo",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/letra-cubo.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 4.5,
        imagem: "images/letra-cubo.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 4.0,
        imagem: "images/letra-cubo.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 3.5,
        imagem: "images/letra-cubo.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 3.0,
        imagem: "images/letra-cubo.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 2.5,
        imagem: "images/letra-cubo.jpg",
      },
    ],
  },
  {
    id: 76,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Letra Redonda",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/letra-redonda.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5,
        imagem: "images/letra-redonda.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 4.75,
        imagem: "images/letra-redonda.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 4.39,
        imagem: "images/letra-redonda.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 3.89,
        imagem: "images/letra-redonda.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 3.5,
        imagem: "images/letra-redonda.jpg",
      },
    ],
  },
  {
    id: 77,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Pudim",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/minipudim.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5.25,
        imagem: "images/minipudim.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 4.89,
        imagem: "images/minipudim.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 4.36,
        imagem: "images/minipudim.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 3.99,
        imagem: "images/minipudim.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 3.65,
        imagem: "images/minipudim.jpg",
      },
    ],
  },
  {
    id: 78,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Rosa",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/miniflor-rosa.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5.25,
        imagem: "images/miniflor-rosa.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 4.89,
        imagem: "images/miniflor-rosa.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 4.36,
        imagem: "images/miniflor-rosa.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 3.99,
        imagem: "images/miniflor-rosa.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 3.65,
        imagem: "images/miniflor-rosa.jpg",
      },
    ],
  },
  {
    id: 79,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Sabonete Oval",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/minisabonete.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5.0,
        imagem: "images/minisabonete.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 4.6,
        imagem: "images/minisabonete.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 4.1,
        imagem: "images/minisabonete.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 3.65,
        imagem: "images/minisabonete.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 3.2,
        imagem: "images/minisabonete.jpg",
      },
    ],
  },
  {
    id: 80,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Vela no Vidro (40g)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/vela-p.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 13.99,
        imagem: "images/vela-p.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 13.26,
        imagem: "images/vela-p.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 40 unidades",
        preco: 12.76,
        imagem: "images/vela-p.jpg",
      },
      {
        idVar: "v4",
        nome: "41 a 50 unidades",
        preco: 12.29,
        imagem: "images/vela-p.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 11.89,
        imagem: "images/vela-p.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 11.29,
        imagem: "images/vela-p.jpg",
      },
    ],
  },
  {
    id: 81,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Sabonete Líquido",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/miniliquido.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5.3,
        imagem: "images/miniliquido.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 4.95,
        imagem: "images/miniliquido.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 30 unidades",
        preco: 4.55,
        imagem: "images/miniliquido.jpg",
      },
      {
        idVar: "v4",
        nome: "31 a 50 unidades",
        preco: 4.35,
        imagem: "images/miniliquido.jpg",
      },
    ],
  },
  {
    id: 82,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Geleia de Banho",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/minigeleia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5.85,
        imagem: "images/minigeleia.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 5.25,
        imagem: "images/minigeleia.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 30 unidades",
        preco: 4.95,
        imagem: "images/minigeleia.jpg",
      },
      {
        idVar: "v4",
        nome: "31 a 50 unidades",
        preco: 4.7,
        imagem: "images/minigeleia.jpg",
      },
    ],
  },
  {
    id: 83,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Flor (M)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/miniflor-m.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 5.0,
        imagem: "images/miniflor-m.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 4.6,
        imagem: "images/miniflor-m.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 4.1,
        imagem: "images/miniflor-m.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 3.65,
        imagem: "images/miniflor-m.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 3.2,
        imagem: "images/miniflor-m.jpg",
      },
    ],
  },
  {
    id: 84,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Mini Flor (P)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/miniflor-p.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 2.5,
        imagem: "images/miniflor-p.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 2.3,
        imagem: "images/miniflor-p.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 2.1,
        imagem: "images/miniflor-p.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 1.95,
        imagem: "images/miniflor-p.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 1.8,
        imagem: "images/miniflor-p.jpg",
      },
    ],
  },
  {
    id: 85,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Escalda Pés (40g)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/escalda-pe.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 3.99,
        imagem: "images/escalda-pe.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 3.69,
        imagem: "images/escalda-pe.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 3.29,
        imagem: "images/escalda-pe.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 2.99,
        imagem: "images/escalda-pe.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 2.79,
        imagem: "images/escalda-pe.jpg",
      },
    ],
  },
  {
    id: 86,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Vela em Latinha",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/lembrancinha-velalata.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 20 unidades",
        preco: 4.99,
        imagem: "images/lembrancinha-velalata.jpg",
      },
      {
        idVar: "v2",
        nome: "21 a 49 unidades",
        preco: 4.59,
        imagem: "images/lembrancinha-velalata.jpg",
      },
      {
        idVar: "v3",
        nome: "50 a 80 unidades",
        preco: 3.99,
        imagem: "images/lembrancinha-velalata.jpg",
      },
      {
        idVar: "v4",
        nome: "81 a 100 unidades",
        preco: 3.59,
        imagem: "images/lembrancinha-velalata.jpg",
      },
    ],
  },
  {
    id: 87,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Deus é fiel",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/deusfiel.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 2.5,
        imagem: "images/deusfiel.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 30 unidades",
        preco: 2.3,
        imagem: "images/deusfiel.jpg",
      },
      {
        idVar: "v3",
        nome: "31 a 50 unidades",
        preco: 2.1,
        imagem: "images/deusfiel.jpg",
      },
      {
        idVar: "v4",
        nome: "51 a 75 unidades",
        preco: 1.95,
        imagem: "images/deusfiel.jpg",
      },
      {
        idVar: "v5",
        nome: "76 a 100 unidades",
        preco: 1.8,
        imagem: "images/deusfiel.jpg",
      },
    ],
  },
  {
    id: 88,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Lembrancinha Personalizada",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/personalize-lembrancinha.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 0,
        imagem: "",
      },
    ],
  },
  {
    id: 89,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Vela Peônia (80g)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/velaG-peonia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 17.99,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 16.26,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 40 unidades",
        preco: 15.76,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v4",
        nome: "41 a 50 unidades",
        preco: 14.89,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 13.89,
        imagem: "images/velaG-peonia.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 12.99,
        imagem: "images/velaG-peonia.jpg",
      },
    ],
  },
  {
    id: 90,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Vela Peônia (80g) na CAIXA",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/lembrancinha-peonia.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 20.99,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 19.26,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 40 unidades",
        preco: 18.76,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v4",
        nome: "41 a 50 unidades",
        preco: 15.29,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 16.89,
        imagem: "images/lembrancinha-peonia.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 15.29,
        imagem: "images/lembrancinha-peonia.jpg",
      },
    ],
  },
  {
    id: 91,
    cat: "vela",
    subcat: "vela",
    nome: "Vela de São Miguel",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/vela-miguel.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 29.99,
        imagem: "",
      },
    ],
  },
  {
    id: 92,
    cat: "vela",
    subcat: "vela",
    nome: "Vela de São Miguel (REFIL)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/vela-miguel-refil.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "",
        preco: 20.99,
        imagem: "",
      },
    ],
  },
  {
    id: 93,
    cat: "presentes",
    subcat: "lembrancinha",
    nome: "Sabonete Surpresa (50g)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/sabonete-surpresa50.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 8.6,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 8.21,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 30 unidades",
        preco: 7.75,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v4",
        nome: "31 a 50 unidades",
        preco: 7.12,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 6.82,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 6.35,
        imagem: "images/sabonete-surpresa50.jpg",
      },
    ],
  },
  {
    id: 94,
    cat: "infantil",
    nome: "Sabonete Surpresa (100g)",
    desc: "",
    icon: "fa-house-chimney",
    imagemPrincipal: "images/sabonete-surpresa50.jpg",
    variantes: [
      {
        idVar: "v1",
        nome: "1 a 10 unidades",
        preco: 13.35,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v2",
        nome: "11 a 20 unidades",
        preco: 12.56,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v3",
        nome: "21 a 30 unidades",
        preco: 11.84,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v4",
        nome: "31 a 50 unidades",
        preco: 11.13,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v5",
        nome: "51 a 75 unidades",
        preco: 10.56,
        imagem: "images/sabonete-surpresa50.jpg",
      },
      {
        idVar: "v6",
        nome: "76 a 100 unidades",
        preco: 9.99,
        imagem: "images/sabonete-surpresa50.jpg",
      },
    ],
  },
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
  let msg = "Olá! Gostaria de fazer um pedido na *Fio de Aroma*:\n\n";
  carrinho.forEach(
    (i) =>
      (msg += `| *${i.quantidade}x ${i.nomeProduto}* ${i.nomeVariante} - *R$ ${(i.preco * i.quantidade).toFixed(2).replace(".", ",")}*\n`),
  );
  const labelTotal = document.getElementById("cart-total-price").innerText;
  msg += `\n*TOTAL: ${labelTotal}*`;
  window.open(`https://wa.me/5522992668115?text=${encodeURIComponent(msg)}`);
}

function toggleMenu(e) {
  e.preventDefault();
  e.stopPropagation();

  const dropdownContent = e.currentTarget.nextElementSibling;
  const isOpen = dropdownContent.classList.contains("ativo");

  document.querySelectorAll(".dropdown-content").forEach((el) => {
    el.classList.remove("ativo");
  });

  if (!isOpen) {
    dropdownContent.classList.add("ativo");

    if (window.innerWidth <= 768) {
      setTimeout(() => {
        dropdownContent.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 200);
    }
  }
}

window.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-content").forEach((el) => {
      el.classList.remove("ativo");
    });
  }
});

document.querySelectorAll("nav > a:not([onclick])").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach((el) => {
      el.classList.remove("ativo");
    });
  });
});
document.addEventListener("DOMContentLoaded", atualizarInterfaceCarrinho);
