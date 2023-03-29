// seleciona o botão
const botao = document.querySelector('#botao');
// adiciona o evento de clique
botao.addEventListener('click', bgColor);

// função que irá gerar a cor aleatória
function bgColor() {
    //gera uma cor aleatória em hexadecimal
    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
}