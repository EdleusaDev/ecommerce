// 1. CONFIGURAÇÃO
const meuWhatsApp = "5571983288313"; 

// 2. LISTA DE PRODUTOS
const products = [
    { id: 1, nome: 'Sandália Feminina', preco: 79.99, categoria: "sandalia", image: 'img/sandaliaouro.jpg' },
    { id: 2, nome: 'Sandalia Anabela preta', preco: 129.99, categoria: "sandalia", image: 'img/sandaliapreta.jpg' },
    { id: 3, nome: 'Sandalia Anabela Areia', preco: 129.99, categoria: "sandalia", image: 'img/sandaliaareia.jpg' },
    { id: 4, nome: 'Sandalia Anabela caramelo', preco: 129.99, categoria: "sandalia", image: 'img/sandaliacaramelo.jpg' },
    { id: 5, nome: 'Sandalia Sandra Dourada', preco: 129.99, categoria: "sandalia", image: 'img/sandaliaouro.jpg' },
    { id: 6, nome: 'Sandalia Sandra Marrom', preco: 129.99, categoria: "sandalia", image: 'img/sandaliasandra.jpg' },
    { id: 7, nome: 'Scarpin Pistache', preco: 89.99, categoria: "scarpin", image: 'img/scarpin_pistache.jpg' },
    { id: 8, nome: 'Scarpin Marfim', preco: 89.99, categoria: "scarpin", image: 'img/scarpin_marfim.jpg' },
    { id: 9, nome: 'Scarpin Caramelo', preco: 89.99, categoria: "scarpin", image: 'img/scarpin_caramelo.jpg' },
    { id: 10, nome: 'Scarpin Azul', preco: 89.99, categoria: "scarpin", image: 'img/scarpin_azul.jpg' },
    { id: 11, nome: 'Scarpin Cinza', preco: 89.99, categoria: "scarpin", image: 'img/scarpin_cinza.jpg' },
    { id: 12, nome: 'Scarpin Nude', preco: 89.99, categoria: "scarpin", image: 'img/scarpin_nude.jpg' },
    { id: 13, nome: 'Tamanco Laço Marrom', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_lacomarrom.jpg' },
    { id: 14, nome: 'Tamanco Laço Dourado', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_lacodourado.jpg' },
    { id: 15, nome: 'Tamanco Bloco Branco', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_blocobranco.jpg' },
    { id: 16, nome: 'Tamanco Bloco Marrom', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_blocomarrom.jpg' },
    { id: 17, nome: 'Crocs Preto', preco: 199.99, categoria: "tamanco", image: 'img/crocs_preto.jpg' },
    { id: 18, nome: 'Crocs Caramelo', preco: 199.99, categoria: "tamanco", image: 'img/crocs_caramelo.jpg' },
    { id: 19, nome: 'Bolsa Marrom', preco: 199.99, categoria: "bolsa", image: 'img/bolsa_marrom.jpg' },
    { id: 20, nome: 'Bolsa Off White', preco: 199.99, categoria: "bolsa", image: 'img/bolsa_off.jpg' },
    { id: 21, nome: 'Bolsa Roxa', preco: 199.99, categoria: "bolsa", image: 'img/bolsa_roxa.jpg' },
    { id: 22, nome: 'Bolsa Caramelo', preco: 199.99, categoria: "bolsa", image: 'img/bolsa_caramelo.jpg' },
    { id: 23, nome: 'Bolsa Preta', preco: 199.99, categoria: "bolsa", image: 'img/bolsa_preta.jpg' },
    { id: 24, nome: 'Bolsa Rosê', preco: 199.99, categoria: "bolsa", image: 'img/bolsa_rose.jpg' },
    { id: 25, nome: 'Usaflex Verde', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_verde.jpg' },
    { id: 26, nome: 'Usaflex Laranja', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_laranja.jpg' },
    { id: 27, nome: 'Usaflex Branco', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_branco.jpg' },
    { id: 28, nome: 'Usaflex Lilás', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_lilas.jpg' },
    { id: 29, nome: 'Usaflex Preto', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_preto.jpg' },
    { id: 30, nome: 'Usaflex Azul', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_azul.jpg' },
    { id: 31, nome: 'Rasteirinha Preta', preco: 79.99, categoria: "rasteirinha", image: 'img/rasteira_preta.jpg' },
    { id: 32, nome: 'Rasteirinha Prata', preco: 79.99, categoria: "rasteirinha", image: 'img/rasteira_prata.jpg' },
    { id: 33, nome: 'Rasteirinha Branca', preco: 79.99, categoria: "rasteirinha", image: 'img/rasteira_branca.jpg' },
    { id: 34, nome: 'Rasteirinha Marrom', preco: 79.99, categoria: "rasteirinha", image: 'img/rasteira_marrom.jpg' },
    { id: 35, nome: 'Rasteirinha Off White', preco: 79.99, categoria: "rasteirinha", image: 'img/rasteira_off.jpg' },
    { id: 36, nome: 'Rasteirinha Dourada', preco: 79.99, categoria: "rasteirinha", image: 'img/rasteira_dourada.jpg' },
    { id: 37, nome: 'Kit Semijoia', preco: 29.99, categoria: "acessorio", image: 'img/semijoia.jpg' },
    { id: 38, nome: 'Chaveiro Cereja', preco: 59.99, categoria: "acessorio", image: 'img/chaveiro_cereja.jpg' },
    { id: 39, nome: 'Pulseira Árvore', preco: 49.99, categoria: "acessorio", image: 'img/pulseira_arvore.jpg' },
    { id: 40, nome: 'Pulseira Prateada', preco: 49.99, categoria: "acessorio", image: 'img/pulseira_prateada.jpg' },
    { id: 41, nome: 'Depilador Facial', preco: 19.99, categoria: "acessorio", image: 'img/depilador_facial.jpg' },
    { id: 42, nome: 'Colar de Aço Inox', preco: 89.99, categoria: "acessorio", image: 'img/colar_aco.jpg' }
];

// 3. INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", function () {
    displayProducts(products); 
});

// FUNÇÃO DE BUSCA
window.executarBusca = function() {
    const termoBusca = document.getElementById('busca').value.toLowerCase();
    const resultados = products.filter(p => 
        p.nome.toLowerCase().includes(termoBusca)
    );

    const carrossel = document.getElementById('meuCarrossel');
    const vitrine = document.getElementById('vitrine');

    if(carrossel) carrossel.style.display = "none";
    if(vitrine) vitrine.style.display = "block";

    displayProducts(resultados);
};

// Adicionar evento para buscar ao apertar "Enter" no teclado
document.getElementById('busca')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        executarBusca();
    }
});

// 4. FUNÇÃO COMPRAR (WHATSAPP)
window.comprarProduto = function(nome, preco) {
    const mensagem = "Olá Edleusa! Gostei do produto: " + nome + " (R$ " + preco.toFixed(2) + "). Como faço para comprar?";
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkFinal = "https://wa.me/" + meuWhatsApp + "?text=" + mensagemCodificada;
    window.open(linkFinal, '_blank');
};

// 5. FUNÇÃO FILTRAR
window.filtrar = function(categoriaSelecionada) {
    const carrossel = document.getElementById('meuCarrossel');
    const vitrine = document.getElementById('vitrine');

    if (categoriaSelecionada === 'todos') {
        if(carrossel) carrossel.style.display = "block";
        if(vitrine) vitrine.style.display = "none";
        displayProducts(products);
    } else {
        if(carrossel) carrossel.style.display = "none";
        if(vitrine) vitrine.style.display = "block";
        const listaFiltrada = products.filter(p => p.categoria === categoriaSelecionada);
        displayProducts(listaFiltrada);
    }
};
// 6. EXIBIÇÃO DOS PRODUTOS (BOTÃO COM TAMANHO AJUSTADO)
function displayProducts(produtosParaExibir) {
    const productContainer = document.getElementById('product-list');
    if (!productContainer) return;

    productContainer.innerHTML = ""; 

    produtosParaExibir.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = "product"; 
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.nome}">
            <h4 style="color: white; margin-top: 10px; font-size: 16px;">${product.nome}</h4>
            <p>R$ ${product.preco.toFixed(2)}</p>
            <button style="width: 50% ; padding: 10px 20px;" onclick="comprarProduto('${product.nome}', ${product.preco})">
                COMPRAR
            </button>
        `;
        productContainer.appendChild(productElement);
    });
}

