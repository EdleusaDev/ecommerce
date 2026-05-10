// 1. LISTA DE PRODUTOS (O seu "Banco de Dados")
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
    { id: 13, nome: 'Tamanco Laço Marrom', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_lamarrom' },
    { id: 14, nome: 'Tamanco Laço Dourado', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_ladourado.jpg' },
    { id: 15, nome: 'Tamanco Bloco Branco', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_blocobranco.jpg' },
    { id: 16, nome: 'Tamanco Plataforma', preco: 199.99, categoria: "tamanco", image: 'img/tamanco.jpg' },
    { id: 17, nome: 'Tamanco Marrom', preco: 199.99, categoria: "bolsa", image: 'img/tamanco_marrom.jpg' },
    { id: 18, nome: 'Usaflex Verde', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_verde.jpg' },
    { id: 19, nome: 'Usaflex Laranja', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_laranja.jpg' },
    { id: 20, nome: 'Usaflex Branco', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_branco.jpg' },
    { id: 21, nome: 'Usaflex Lilás', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_lilas.jpg' },
    { id: 22, nome: 'Usaflex Preto', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_preto.jpg' },
    { id: 23, nome: 'Usaflex Azul', preco: 79.99, categoria: "chinelo", image: 'img/usaflex_azul.jpg' }
];

// 2. O CÓDIGO DO INÍCIO (Login e Carregamento Inicial)
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!");
    
    const btnLogin = document.getElementById('btnLogin');
    if (btnLogin) {
        btnLogin.addEventListener('click', function() {
            console.log("Botão de login clicado!");
            alert("Área de login em desenvolvimento.");
        });
    }
    
    // Inicia a vitrine vazia ou com produtos (como preferir)
    displayProducts(products); 
});

// 3. FUNÇÃO FILTRAR (Global para o HTML encontrar)
window.filtrar = function(categoriaSelecionada) {
    console.log("Filtrando por: " + categoriaSelecionada);
    
    const carrossel = document.getElementById('meuCarrossel');
    const vitrine = document.getElementById('vitrine');

    if (categoriaSelecionada === 'todos') {
        if(carrossel) carrossel.style.display = "block";
        if(vitrine) vitrine.style.display = "none";
    } else {
        if(carrossel) carrossel.style.display = "none";
        if(vitrine) vitrine.style.display = "block";

        const listaFiltrada = products.filter(p => p.categoria === categoriaSelecionada);
        displayProducts(listaFiltrada);
    }
};

// 4. FUNÇÃO DE EXIBIR OS PRODUTOS (A "Fábrica")
function displayProducts(produtosParaExibir) {
    const productContainer = document.getElementById('product-list');

    if (!productContainer) {
        console.error("Elemento 'product-list' não encontrado!");
        return;
    }

    productContainer.innerHTML = ""; // Limpa a vitrine antes de mostrar novos

    produtosParaExibir.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-md-4'); // Mantém o padrão do seu Bootstrap
        productElement.innerHTML = `
            <div class="thumbnail" style="margin-bottom: 20px;">
                <img src="${product.image}" alt="${product.nome}" style="width:100%">
                <div class="caption text-center">
                    <h3>${product.nome}</h3>
                    <p><strong>R$ ${product.preco.toFixed(2)}</strong></p>
                    <button class="btn btn-primary" onclick="alert('Adicionado ao carrinho!')">Comprar</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}
