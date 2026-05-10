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
    { id: 13, nome: 'Tamanco Laço Marrom', preco: 199.99, categoria: "tamanco", image: 'img/tamanco_lacomarrom' },
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
    { id: 42, nome: 'Colar de Aço Inox', preco: 89.99, categoria: "acessorio", image: 'img/colar_aco.jpg' },   
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
    if (!productContainer) return;

    productContainer.innerHTML = ""; 

    produtosParaExibir.forEach(product => {
        const productElement = document.createElement('div');
        // Mantém as colunas do Bootstrap
        productElement.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'product'); 
        
        productElement.innerHTML = `
            <div class="thumbnail" style="height: 420px; display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 20px;">
                
                <div style="height: 250px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #f9f9f9;">
                    <img src="${product.image}" alt="${product.nome}" 
                         style="max-height: 100%; max-width: 100%; object-fit: contain;">
                </div>

                <div class="caption text-center" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                    <h3 style="font-size: 16px; margin: 5px 0; height: 40px; overflow: hidden; line-height: 1.2;">
                        ${product.nome}
                    </h3>
                    <p style="font-size: 18px; color: #333; font-weight: bold; margin: 5px 0;">
                        R$ ${product.preco.toFixed(2)}
                    </p>
                    <button class="btn btn-primary" style="width: 100%;" onclick="alert('Adicionado!')">
                        Comprar
                    </button>
                </div>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

