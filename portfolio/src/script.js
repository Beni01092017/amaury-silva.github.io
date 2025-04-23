document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir uma mensagem de boas-vindas
    function showWelcomeMessage() {
        const welcomeElement = document.createElement('div');
        welcomeElement.textContent = 'Bem-vindo ao meu portfólio!';
        welcomeElement.style.fontSize = '24px';
        welcomeElement.style.textAlign = 'center';
        welcomeElement.style.margin = '20px';
        document.body.appendChild(welcomeElement);
    }

    // Função para manipular cliques em botões
    function setupButtonListeners() {
        const projectButtons = document.querySelectorAll('.project-button');
        projectButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Você clicou em um projeto!');
            });
        });
    }

    // Chama as funções ao carregar a página
    showWelcomeMessage();
    setupButtonListeners();
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado com sucesso!");
});