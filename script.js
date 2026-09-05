const categoriasLayout = [
    { 
        id: "CorpoBanho", 
        titulo: "Corpo & Banho", 
        icone: "fa-bath", 
        imagemBanner: "",
        subcategorias:
        [
            {
                id: "perfumados",
                titulo: "Sabonetes Perfumados",
                banner: "images/guiaSabonete.jpg"
            },
            {
                id: "especiais",
                titulo: "Sabonetes Especiais",
                banner: "images/guiaSabonete2.jpg"
            },
            {
                id: "geleia",
                titulo: "Geleias de Banho",
                banner: ""
            },
            {
                id: "colher",
                titulo: "Sabonete de Esfoliante",
                banner: ""
            },
            {
                id: "liquido",
                titulo: "Sabonete Líquido",
                banner: ""
            },
            {
                id: "especificos",
                titulo: "Sabonetes Específicos",
                banner: "images/guiaSabonete3.jpg"
            },
            {
                id: "energeticos",
                titulo: "Sabonetes Energéticos",
                banner: "images/guiaSabonete4.jpg"
            }
        ]
    },
    { 
        id: "Perfumaria", 
        titulo: "Perfumaria", 
        icone: "fa-spray-can-sparkles",
        subcategorias:
        [
            {
                id: "splash",
                titulo: "Body Splash"
            },
            {
                id: "cabelo",
                titulo: "Perfume para Cabelo"
            }
        ]
    },
    {
        id: "masculina",
        titulo: "Linha Masculina",
        icone: "fa-mars"        
    },
    {
        id: "Infantil",
        titulo: "Linha Infantil",
        icone: "fa-baby-carriage"
    },
    {
        id: "Casa",
        titulo: "Aromas para Casa",
        icone: "fa-house-chimney"
    },
    {
        id: "Presentes",
        titulo: "Presentes",
        icone: "fa-gift"
    }
];

const produtos = [
    // 100 - Sabonetes Perfumados
    {
        id: 101,
        cat: "CorpoBanho",
        subcat: "perfumados", 
        nome: "Rosa Mosqueta", 
        desc: "Hidratação e maciez.",
        icon: "fa-spa",
        imagemPrincipal: "images/rosa-mosqueta.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49 },
            {
                    idVar: "v2",
                    nome: "Massageador (130g)",
                    preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
            ] 
            },
    {
        id: 102,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Alecrim",
        desc: "Revitalização e frescor.",
        icon: "fa-leaf",
        imagemPrincipal: "images/alecrim.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            { idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 103,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Flor de Laranjeira",
        desc: "Conforto e hidratação",
        icon: "fa-spa",
        imagemPrincipal: "images/flor-laranjeira.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)", preco: 13.99
            }
        ]
    },
    {
        id: 104,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Algodão",
        desc: "Maciez e suavidade",
        icon: "fa-spa",
        imagemPrincipal: "images/algodao.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 105,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Bergamota",
        desc: "Revitalização e hidratação",
        icon: "fa-spa",
        imagemPrincipal: "images/bergamota.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 110,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Macadâmia",
        desc: "Hidratação e maciez.",
        icon: "fa-spa",
        imagemPrincipal: "images/macadamia.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 111,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Maracujá",
        desc: "Hidratação e suavidade.",
        icon: "fa-spa",
        imagemPrincipal: "images/maracuja.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 115,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Pitaya",
        desc: "Hidratação e maciez.",
        icon: "fa-spa",
        imagemPrincipal: "images/pitaya.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 116,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Zarath",
        desc: "Revitalização e conforto.",
        icon: "fa-spa",
        imagemPrincipal: "images/zarath.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 117,
        cat: "CorpoBanho",
        subcat: "perfumados",
        nome: "Limão Siciliano",
        desc: "Revitalização e hidratação.",
        icon: "fa-spa",
        imagemPrincipal: "images/limao-siciliano.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },

    // 200 - Sabonetes Especiais
    {
        id: 201,
        cat: "CorpoBanho",
        subcat: "especiais",
        nome: "Caipirinha",
        desc: "Hidratação e revitalização.",
        icon: "fa-glass-citrus",
        imagemPrincipal: "images/caipirinha.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Redondo (90g)",
                preco: 10.49
            },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 12.99
            },
            {
                idVar: "v3",
                nome: "Massageador com Bucha (130g)",
                preco: 13.99
            }
        ]
    },
    {
        id: 202,
        cat: "CorpoBanho",
        subcat: "especiais",
        nome: "Camomila & Lavanda Francesa",
        desc: "Suavidade e maciez.",
        icon: "fa-spa",
        imagemPrincipal: "images/camomila-lavanda-francesa.jpg",
        variantes: [
            { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
            { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
            { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 }
        ]
    },
    {
        id: 207,
        cat: "CorpoBanho",
        subcat: "especiais",
        nome: "Majestade",
        desc: "Hidratação e revitalização.",
        icon: "fa-spa",
        imagemPrincipal: "images/majestade.jpg",
        variantes: [
            { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
            { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
            { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 }
        ]
    },
    {
        id: 208,
        cat: "CorpoBanho",
        subcat: "especiais",
        nome: "Melancia e menta",
        desc: "Hidratação e frescor.",
        icon: "fa-spa",
        imagemPrincipal: "images/melancia-menta.jpg",
        variantes: [
            { idVar: "v1", nome: "Redondo (90g)", preco: 10.49 },
            { idVar: "v2", nome: "Massageador (130g)", preco: 12.99 },
            { idVar: "v3", nome: "Massageador com Bucha (130g)", preco: 13.99 }
        ]
    },

    // 300 - Sabonetes Específicos
    {
        id: 301,
        cat: "CorpoBanho",
        subcat: "especificos",
        nome: "Enxofre",
        desc: "Para oleosidade e acne.",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/enxofre.jpg",
        variantes: [
            {
                idVar: "v1",
                nome: "Normal (100g)",
                preco: 11.99 },
            {
                idVar: "v2",
                nome: "Massageador (130g)",
                preco: 15.99 }
        ]
    },
    {
        id: 302,
        cat: "CorpoBanho",
        subcat: "especificos",
        nome: "Enxofre, Açafrão & Argila Branca",
        desc: "Indicado para manchas.",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/enxofre-acafrao-argila.jpg",
        variantes: 
        [
            {
                idVar: "v1",
                nome: "Normal (100g)",
                preco: 11.99
            },
            { idVar: "v2", nome: "Massageador (130g)", preco: 15.99 }
        ]
    },
    {
        id: 303,
        cat: "CorpoBanho",
        subcat: "especificos",
        nome: "Açafrão",
        desc: "Ação antioxidante.",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/acafrao.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Retangular (100g)",
                preco: 11.99
            },
            {idVar: "v2", nome: "Massageador (130g)", preco: 15.99}
        ]
    },
    {
        id: 304,
        cat: "CorpoBanho",
        subcat: "especificos",
        nome: "Argila",
        desc: "Cuidado mineral.",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/toda-argila.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Branca (70g)",
                preco: 9.99,
                imagem: "images/argila-branca.jpg"
            },
            {
                idVar: "v2",
                nome: "Verde (70g)",
                preco: 9.99,
                imagem: "images/argila-verde.jpg"
            },
            {
                idVar: "v3",
                nome: "Vermelha (70g)",
                preco: 9.99,
                imagem: "images/argila-vermelha.jpg"
            }
        ]
    },
    {
        id: 305,
        cat: "CorpoBanho",
        subcat: "especificos",
        nome: "Carvão & Branca",
        desc: "Purificante.",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/branca-carvao.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Massageador (130g)",
                preco: 15.99
            }
        ]
    },
    
    // 400 - Energéticos
    {
        id: 401,
        cat: "CorpoBanho",
        subcat: "energeticos",
        nome: "Sabonete Energético",
        desc: "Limpeza energética pesada",
        icon: "fa-fire",
        imagemPrincipal: "images/sabonete-energetico.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Anil + Alecrim + Sal Grosso (100g)",
                preco: 12.29,
                imagem: "images/anil-alecrim-sal.jpg"
            },
            {
                idVar: "v2",
                nome: "Anil + Alecrim (100g)",
                preco: 11.99,
                imagem: "images/anil-alecrim.jpg"
            },
            {
                idVar: "v3",
                nome: "Alecrim + Sal Grosso (100g)",
                preco: 12.49,
                imagem: "images/alecrim-salgrosso.jpg"
            },
            {
                idVar: "v4",
                nome: "Anil + 7 Ervas (100g)",
                preco: 12.49,
                imagem: "images/anil-7ervas.jpg"
            },
            {
                idVar: "v5",
                nome: "Alecrim + Arruda (100g)",
                preco: 10.99,
                imagem: "images/alecrim-arruda.jpg"
            },
            {
                idVar: "v6",
                nome: "Xô Uruca - Arruda + Alecrim + Sal Grosso (100g)",
                preco: 11.49,
                imagem: "images/xo-uruca.jpg"
            }
        ]
    },

    // 500 - Perfumaria
    {
        id: 501,
        cat: "Perfumaria",
        subcat: "splash",
        nome: "Body Splash",
        desc: "Fragrância duradoura.",
        icon: "fa-spray-can",
        imagemPrincipal: "",
        variantes: 
        [
            {
                idVar: "v1",
                nome: "200ml",
                preco: 55.00
            }
    ]
    },

    // 600 - Infantil
    {
        id: 601,
        cat: "Infantil",
        nome: "Mami Baby",
        desc: "Fórmula suave",
        icon: "fa-child",
        imagemPrincipal: "images/mami-baby.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Rosa",
                preco: 10.99,
                imagem: "images/mami-baby-rosa.jpg"
            },
            {
                idVar: "v2",
                nome: "Azul",
                preco: 10.99,
                imagem: "images/mami-baby-azul.jpg"
            }
        ]
    },
    // 700 - Geleias de Banho
    {
        id: 706,
        cat: "CorpoBanho",
        subcat: "geleia",
        nome: "Geleias de Banho (200ml)",
        desc: "Hidratação e frescor",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/geleia-banho.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Limão Siciliano",
                preco: 24.99,
                imagem: "images/geleia-limao.jpg"
            },
            {
                idVar: "v2",
                nome: "Pitaya",
                preco: 24.99,
                imagem: "images/geleia-pitaya.jpg"
            },
            {
                idVar: "v3",
                nome: "Maracujá",
                preco: 24.99,
                imagem: "images/geleia-maracuja.jpg"
            },
            {
                idVar: "v4",
                nome: "Melancia",
                preco: 24.99,
                imagem: "images/geleia-melancia.jpg"
            },
            {
                idVar: "v5",
                nome: "Morango",
                preco: 24.99,
                imagem: "images/geleia-morango.jpg"
            },            
        ]
    },

    // 800 - Sabonete Líquido
    {
        id: 801,
        cat: "CorpoBanho",
        subcat: "liquido",
        nome: "Sabonete Líquido (100ml)",
        desc: "Hidratação e frescor",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/sabonete-liquido.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Erva Doce",
                preco: 14.99,
                imagem: "images/sabonete-liquido-erva.jpg"
            },
            {
                idVar: "v2",
                nome: "Flor de Cerejeira",
                preco: 14.99,
                imagem: "images/sabonete-liquido-cerejeira.jpg"
            },
            {
                idVar: "v3",
                nome: "Lavanda Francesa",
                preco: 14.99,
                imagem: "images/sabonete-liquido-lavanda.jpg"
            },
            {
                idVar: "v4",
                nome: "Rosa Mosqueta",
                preco: 14.99,
                imagem: "images/sabonete-liquido-rosa.jpg"
            },
            {
                idVar: "v5",
                nome: "Algodão",
                preco: 14.99,
                imagem: "images/sabonete-liquido-algodao.jpg"
            },
            {
                idVar: "v6",
                nome: "Maracujá",
                preco: 14.99,
                imagem: "images/sabonete-liquido-maracuja.jpg"
            }
        ]
    },

    // 900 - Sabonete de Esfoliante
    {
        id: 901,
        cat: "CorpoBanho",
        subcat: "colher",
        nome: "Sabonete Esfoliante (150g)",
        desc: "Esfoliante e hidratante feito com manteiga corporal",
        icon: "fa-bottle-droplet",
        imagemPrincipal: "images/sabonete-esfoliante.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Menta",
                preco: 19.99,
                imagem: "images/sabonete-esfoliante-menta.jpg"
            },
            {
                idVar: "v2",
                nome: "Maraacujá",
                preco: 19.99,
                imagem: "images/sabonete-esfoliante-maracuja.jpg"
            },
            {
                idVar: "v3",
                nome: "Morango",
                preco: 19.99,
                imagem: "images/sabonete-esfoliante-morango.jpg"
            }
        ]   
    },

    // 1000 - Linha Masculina
    {
        id: 1001,
        cat: "masculina",
        nome: "Espuma de Barbear (100ml)",
        desc: "Produtos especialmente desenvolvidos para o cuidado masculino",
        icon: "fa-mars",
        imagemPrincipal: "images/espuma-barbear.jpg",
        variantes:
        [
            {
                idVar: "v1",
                nome: "Espuma de Barbear",
                preco: 29.99,
                imagem: "images/espuma-barbear.jpg"
            }
        ]                      
    },

];

let carrinho = JSON.parse(localStorage.getItem('carrinhoFioDeAroma')) || [];
let produtoSendoVisto = null; 
let varianteSelecionada = null; 
let qtdeSelecionada = 1;

function salvarCarrinho() { localStorage.setItem('carrinhoFioDeAroma', JSON.stringify(carrinho)); }

function toggleCart() { 
    document.getElementById('cart-sidebar').classList.toggle('open'); 
    document.getElementById('overlay').classList.toggle('open'); 
}

function atualizarInterfaceCarrinho() {
    const divItens = document.getElementById('cart-items');
    const labelCount = document.getElementById('cart-count');
    const labelTotal = document.getElementById('cart-total-price');
    if (!divItens) return;

    divItens.innerHTML = '';
    let totalSoma = 0;
    let totalQtd = 0;

    if (carrinho.length === 0) {
        divItens.innerHTML = `<div style="text-align:center; padding-top:50px;"><i class="fa-solid fa-bag-shopping" style="font-size:40px; color:#eee; margin-bottom:15px;"></i><p style="color:#888; font-style:italic;">Sua sacola está vazia.</p></div>`;
    } else {
        carrinho.forEach(item => {
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
                        <span class="cart-item-price">R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                        <span class="remove-item" onclick="removerDoCarrinho('${item.carrinhoId}')"><i class="far fa-trash-alt"></i></span>
                    </div>
                </div>`;
        });
    }
    if (labelCount) labelCount.innerText = totalQtd;
    if (labelTotal) labelTotal.innerText = `R$ ${totalSoma.toFixed(2).replace('.', ',')}`;
}

function alterarQtdeCarrinho(id, n) {
    const i = carrinho.find(item => item.carrinhoId === id);
    if(i) {
        i.quantidade += n;
        if(i.quantidade <= 0) removerDoCarrinho(id);
        salvarCarrinho(); atualizarInterfaceCarrinho();
    }
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(i => i.carrinhoId !== id);
    salvarCarrinho(); atualizarInterfaceCarrinho();
}

function checkoutWhatsApp() {
    if(carrinho.length === 0) return alert("Carrinho vazio!");
    let msg = "Olá! Gostaria de fazer um pedido na *Fio de Aroma* ✨:\n\n";
    carrinho.forEach(i => msg += `▪ *${i.quantidade}x ${i.nomeProduto}* (${i.nomeVariante}) - R$ ${(i.preco*i.quantidade).toFixed(2).replace('.',',')}\n`);
    const labelTotal = document.getElementById('cart-total-price').innerText;
    msg += `\n*TOTAL: ${labelTotal}*`;
    window.open(`https://wa.me/5522992668115?text=${encodeURIComponent(msg)}`);
}

function toggleMenu(e) {
    if (window.innerWidth <= 768) {
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.classList.toggle('mostrar-mobile');
    }
}

document.addEventListener("DOMContentLoaded", atualizarInterfaceCarrinho);