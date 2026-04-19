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
    { id: 1, nome: 'Sandália Feminina', preco: 79.99, image: 'img/sandalia.jpg' },
    { id: 2, nome: 'Scarpin Preto', preco: 129.99, image: 'img/scarpin.jpg' },
    { id: 3, nome: 'Tamanco Feminino', preco: 89.99, image: 'img/tamanco.jpg' },
    { id: 4, nome: 'Bota Feminina', preco: 199.99, image: 'img/bota.jpg' }
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

