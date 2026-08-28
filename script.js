// Função para controlar a troca de Abas (Clássico / Shippuden)
function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Função do Botão de Alternar o Tema (Folha / Akatsuki)
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-akatsuki');
    
    if (document.body.classList.contains('tema-akatsuki')) {
        btnTema.textContent = 'Modo Folha 🍃';
    } else {
        btnTema.textContent = 'Modo Akatsuki 🌙';
    }
});

// Função para o Quiz Ninja
function responder(correto) {
    const resultado = document.getElementById('quiz-resultado');
    if (correto) {
        resultado.textContent = " Resposta Certa! Você demonstrou conhecimento de nível Hokage!";
    } else {
        resultado.textContent = " Resposta Errada! Volte para a Academia Ninja e tente novamente!";
    }
}



