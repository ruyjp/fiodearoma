// ==========================================
// 1. DADOS DOS PRODUTOS E CATEGORIAS
// ==========================================

// Agora as categorias podem ter "subcategorias"
const categoriasLayout = [
    { 
        id: "CorpoBanho", 
        titulo: "Corpo & Banho", 
        icone: "fa-bath", 
        imagemBanner: "images/toda-argila.jpg",
        // LISTA DE SUBCATEGORIAS
        subcategorias: [
            { id: "perfumados", titulo: "Sabonetes Perfumados" },
            { id: "especificos", titulo: "Sabonetes Específicos" },
            { id: "energeticos", titulo: "Sabonetes Energéticos" }
        ]
    },
    { 
        id: "Perfumaria", 
        titulo: "Perfumaria & Cuidados", 
        icone: "fa-spray-can-sparkles",
        // Exemplo: No futuro você pode adicionar subcategorias aqui também!
        subcategorias: [
            { id: "splash", titulo: "Body Splash" },
            { id: "cabelo", titulo: "Perfume para Cabelo" }
        ]
    },
    { id: "Infantil", titulo: "Linha Infantil", icone: "fa-baby-carriage" },
    { id: "Casa", titulo: "Aromas para Casa", icone: "fa-house-chimney" },
    { id: "Presentes", titulo: "Presentes & Lembrancinhas", icone: "fa-gift" }
];

const produtos = [
    // --- CORPO E BANHO (Agora com SUBCAT) ---
    // Sabonetes Perfumados
    { id: 101, cat: "CorpoBanho", subcat: "perfumados", nome: "Rosa Mosqueta", desc: "<u>Floral delicado e elegante</u> <br><u>Hidratação, maciez e conforto</u><br>", icon: "fa-spa", imagemPrincipal: "images/rosa-mosqueta.jpg", variantes: [{ idVar: "v1", nome: "Normal (90g)", preco: 10.49, imagem: "images/rosa-mosqueta.jpg" }, { idVar: "v2", nome: "Massageador sem bucha (130g)", preco: 12.99, imagem: "" }] },
    { id: 102, cat: "CorpoBanho", subcat: "perfumados", nome: "Alecrim", desc: "<u>Herbal mentolado</u> <br><u>Revitalização e hidratação</u></br>", icon: "fa-leaf", imagemPrincipal: "images/alecrim.jpg", variantes: [{ idVar: "v1", nome: "Normal (90g)", preco: 10.49, imagem: "images/alecrim.jpg" }] },
    
    // Sabonetes Específicos
    { id: 127, cat: "CorpoBanho", subcat: "especificos", nome: "Enxofre", desc: "<u>Para oleosidade intensa e acne</u></br>", icon: "fa-bottle-droplet", imagemPrincipal: "images/enxofre.jpg", variantes: [{ idVar: "v1", nome: "Normal (100g)", preco: 11.99, imagem: "images/enxofre.jpg" }] },
    { id: 131, cat: "CorpoBanho", subcat: "especificos", nome: "Argila", desc: "Puro cuidado mineral com argila branca.", icon: "fa-bottle-droplet", imagemPrincipal: "images/toda-argila.jpg", variantes: [{ idVar: "v1", nome: "Branca (70g)", preco: 9.99, imagem: "images/argila-branca.jpg" }] },
    
    // Sabonetes Energéticos (Movidos para dentro de Banho)
    { id: 601, cat: "CorpoBanho", subcat: "energeticos", nome: "Sabonete Sal Grosso", desc: "Limpeza energética profunda.", icon: "fa-fire", imagemPrincipal: "", variantes: [{ idVar: "v1", nome: "Padrão", preco: 18.00, imagem: "" }] },

    // --- PERFUMARIA (Com Subcat de exemplo) ---
    { id: 201, cat: "Perfumaria", subcat: "splash", nome: "Body Splash", desc: "Prolongue a sensação do banho com nossas fragrâncias.", icon: "fa-spray-can", imagemPrincipal: "", variantes: [{ idVar: "v1", nome: "Body Splash (Colônia)", preco: 55.00, imagem: "" }] },
    { id: 202, cat: "Perfumaria", subcat: "cabelo", nome: "Perfume de Cabelo", desc: "Cabelos cheirosos o dia todo.", icon: "fa-spray-can", imagemPrincipal: "", variantes: [{ idVar: "v2", nome: "Padrão", preco: 40.00, imagem: "" }] },

    // --- OUTROS (Sem subcat, o sistema agrupa normalmente) ---
    { id: 301, cat: "Infantil", nome: "Linha Infantil", desc: "Fórmulas ultra suaves.", icon: "fa-child", imagemPrincipal: "", variantes: [{ idVar: "v1", nome: "Sabonete Padrão", preco: 22.00, imagem: "" }] }
    
    // NOTA: Cole todos os seus produtos reais aqui e apenas adicione a tag subcat: "nome-da-subcat" neles!
];

// ==========================================
// 2. LÓGICA GERAL E CARRINHO (LocalStorage)
// ==========================================
let carrinho = JSON.parse(localStorage.getItem('carrinhoFioDeAroma')) || [];
let produtoSendoVisto = null; 
let varianteSelecionada = null; 
let qtdeSelecionada = 1;

document.addEventListener("DOMContentLoaded", function() { atualizarInterfaceCarrinho(); });
function salvarCarrinho() { localStorage.setItem('carrinhoFioDeAroma', JSON.stringify(carrinho)); }
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('open'); }

function alterarQtdeCarrinho(carrinhoId, delta) {
    const item = carrinho.find(i => i.carrinhoId === carrinhoId);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) carrinho = carrinho.filter(i => i.carrinhoId !== carrinhoId);
        salvarCarrinho(); atualizarInterfaceCarrinho();
    }
}

function removerDoCarrinho(carrinhoId) {
    carrinho = carrinho.filter(item => item.carrinhoId !== carrinhoId);
    salvarCarrinho(); atualizarInterfaceCarrinho();
}

function atualizarInterfaceCarrinho() {
    const divItens = document.getElementById('cart-items');
    const labelCount = document.getElementById('cart-count');
    const labelTotal = document.getElementById('cart-total-price');
    if (!divItens || !labelCount || !labelTotal) return;

    divItens.innerHTML = '';
    let somaTotal = 0; let quantidadeTotal = 0;

    if (carrinho.length === 0) {
        divItens.innerHTML = '<p style="text-align:center; color:#999; margin-top:30px;">Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach(item => {
            const subtotal = item.preco * item.quantidade;
            somaTotal += subtotal; quantidadeTotal += item.quantidade;
            divItens.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.nomeProduto}</h4>
                        <span>Opção: ${item.nomeVariante}</span>
                        <div class="cart-qty-controls">
                            <button class="cart-qty-btn" onclick="alterarQtdeCarrinho('${item.carrinhoId}', -1)">-</button>
                            <span class="cart-qty-number">${item.quantidade}</span>
                            <button class="cart-qty-btn" onclick="alterarQtdeCarrinho('${item.carrinhoId}', 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-price-box">
                        <div class="cart-item-price">R$ ${subtotal.toFixed(2).replace('.', ',')}</div>
                        <span class="cart-item-remove" onclick="removerDoCarrinho('${item.carrinhoId}')">Remover</span>
                    </div>
                </div>
            `;
        });
    }
    labelCount.innerText = quantidadeTotal;
    labelTotal.innerText = `R$ ${somaTotal.toFixed(2).replace('.', ',')}`;
}

function checkoutWhatsApp() {
    if (carrinho.length === 0) return alert("Adicione produtos ao carrinho.");
    let msg = "Olá, Fio de Aroma! ✨\nGostaria de fazer o seguinte pedido:\n\n";
    let valorFinal = 0;
    carrinho.forEach(item => {
        let sub = item.preco * item.quantidade;
        msg += `▪ *${item.quantidade}x ${item.nomeProduto}*\n  ↳ ${item.nomeVariante}\n  R$ ${sub.toFixed(2).replace('.', ',')}\n\n`;
        valorFinal += sub;
    });
    msg += `*TOTAL ESTIMADO: R$ ${valorFinal.toFixed(2).replace('.', ',')}*\n\nPodemos verificar o pagamento?`;
    window.open(`https://api.whatsapp.com/send?phone=5522992668115&text=${encodeURIComponent(msg)}`, '_blank');
}