document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!");
    const btnLogin = document.getElementById('btnLogin');
    if (btnLogin) {
        btnLogin.addEventListener('click', function() {
            console.log("Botão de login clicado!");
        });
    }
    
    // Carrega todos os produtos ao abrir a página
    displayProducts(products); 
});

const products = [
    { id: 1, nome: 'Sandália Feminina', preco: 79.99, categoria: "sandalia", image: 'img/sandaliaouro.jpg' },
    { id: 2, nome: 'Sandalia Anabela preta', preco: 129.99, categoria: "sandalia", image: 'img/sandaliapreta.jpg' },
    { id: 3, nome: 'Sandalia Anabela Areia', preco: 129.99, categoria: "sandalia", image: 'img/sandaliaareia.jpg' },
    { id: 4, nome: 'Sandalia Anabela caramelo', preco: 129.99, categoria: "scarpin", image: 'img/sandaliacaramelo.jpg' },
    { id: 5, nome: 'Sandalia Sandra Dourada', preco: 129.99, categoria: "rasteirinha", image: 'img/sandaliaouro.jpg' },
    { id: 6, nome: 'Sandalia Sandra Marrom', preco: 129.99, categoria: "acessorio", image: 'img/sandaliasandra.jpg' },
    { id: 7, nome: 'Tamanco Feminino', preco: 89.99, categoria: "tamanco", image: 'img/tamanco.jpg' },
    { id: 8, nome: 'Bota Marrom', preco: 199.99, categoria: "bolsa", image: 'img/bota.jpg' },
    { id: 9, nome: 'Bota Marsala', preco: 199.99, categoria: "chinelo", image: 'img/bota_marsala.jpg' },
    { id: 10, nome: 'Bota Marsala', preco: 199.99, categoria: "bolsa", image: 'img/bota_marsala.jpg' }
];

function displayProducts(produtosParaExibir) {
    const productContainer = document.getElementById('product-list');

    if (!productContainer) {
        console.error("Elemento 'product-list' não encontrado no HTML!");
        return;
    }

    // Limpa antes de desenhar
    productContainer.innerHTML = "";

    produtosParaExibir.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.nome}">
            <h3>${product.nome}</h3>
            <p>R$ ${product.preco.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, '${product.nome}', ${product.preco})">Comprar</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// AGORA A FUNÇÃO FILTRAR ESTÁ SOLTA E VISÍVEL!
function filtrar(categoriaSelecionada){
    const carrossel = document.getElementById('meuCarrossel');
    const vitrine = document.getElementById('vitrine');
    const listaDeSapatos = document.getElementById('product-list');

    if (categoriaSelecionada === 'todos') {
        carrossel.style.display = "block";
        vitrine.style.display = "none";
    } else {
        carrossel.style.display = "none";
        vitrine.style.display = "block";

        listaDeSapatos.innerHTML = "";

        // Usando 'products' que é o nome da sua lista lá em cima
        const listaFiltrada = products.filter(p => p.categoria === categoriaSelecionada);
        
        displayProducts(listaFiltrada);
    }
}

function mostrarHome(){
    document.getElementById('meuCarrossel').style.display = "block";
    document.getElementById('vitrine').style.display = "none";
}
