document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!");
     const btnLogin = document.getElementById('btnLogin');
        if (btnLogin) {
            btnLogin.addEventListener('click', function() {
                console.log("Botão de login clicado!");
                // Adicione a lógica que você deseja para o botão de login
            });
        }
    
        displayProducts();  // Essa função vai carregar os produtos (já definida no seu script)
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

function displayProducts() {
    const productContainer = document.getElementById('product-list');

    if (!productContainer) {
        console.error("Elemento 'product-list' não encontrado no HTML!");
        return;
    }

    products.forEach(product => {
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

    //Filtra os produtos por categoria
    function filtrar(categoriaSelecionada){
        //1. identifica o carrossel e a vitrine
         const carrossel  = document.getElementById('meuCarrossel');
         const vitrine  = document.getElementById('vitrine');
         const listaDeSapatos  = document.getElementById('product-list');

        //2. Se clicar em alguma opção do menu,esconde o carrossel e mostra a vitrine
         carrossel.style.display = "none";
         vitrine.style.display = "block";

        //3. limpa a vitrine para os produtos não duplicarem
        listaDeSapatos.innerHTML = "";

        //4. Faz o filtro por categoria
        const listaFiltrada = categoriaSelecionada === 'todos'
                        ? produtos
                        : produtos.filter(p => p.categoria === categoriaSelecionada);
        //5. Manda para exibir
        displayProducts(listaFiltrada);
        
    }
    //volta à página inicial
    function mostrarHome(){
        const carrossel  = document.getElementById('container-carrossel').style.display="block";
        document.getElementById('vitrine').style.display="none";
    }

    //Formulario
    const loginForm = document.getElementById('loginForm'); 
    const mensagem = document.getElementById('mensagem');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que a página recarregue ao enviar o formulário
            
            // Pegando os valores digitados pelo usuário
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            // Usuário e senha cadastrados (simulação)
            const usuarioCorreto = "teste@email.com";
            const senhaCorreta = "123456";

            // Verificação do login
            if (email === usuarioCorreto && senha === senhaCorreta) {
                mensagem.innerText = "✅ Login realizado com sucesso!";
                mensagem.style.color = "green";
                console.log("Usuário logado!");
            } else {
                mensagem.innerText = "❌ E-mail ou senha incorretos!";
                mensagem.style.color = "red";
            }
        });
    }
}

