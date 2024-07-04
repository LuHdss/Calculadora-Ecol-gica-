//guarda a div que vai mudar; caixa principal
const caixaPrincipal = document.querySelector ('.enunciado-principal');

//guarda o botao
const botaoPrincipal = document.querySelector ('.botao-principal');

const inputRange = document.querySelector('#input-range');
const labelRange = document.querySelector('#labelRange');
inputRange.classList.add('input-range');

const inputNome = document.createElement ('input');
inputNome.type = 'text';
let nome; 

//contador de pagina da calculadora
let paginaAtual = 0;

selecionaPagina ();

//adiciona um "espião" ao botao que identifica o click
botaoPrincipal.addEventListener('click', function(evento){
    evento.preventDefault (); //evita atualização da pagina 
    paginaAtual++; //adicionar uma unidade a pagina atual
    if(!inputNome.value && paginaAtual === 2){
        paginaAtual = 1;
        alert('Por favor, digite seu nome para continuar.')
    }
   
    selecionaPagina ();
})

inputNome.addEventListener('change', function(evento){
    nome = inputNome.value;
})

inputRange.addEventListener('input',function(evento){
    labelRange.innerHTML = `${inputRange,value}%`;
})

function selecionaPagina () {
    if (paginaAtual === 0){
        caixaPrincipal.innerHTML = 'Olá! vamos calcular sua pegada ecológica ?';
    } else if (paginaAtual === 1){ 
        caixaPrincipal.innerHTML = '';
        caixaPrincipal.appendChild(inputNome);
        inputNome.classList.add('input-text');
        inputNome.setAttribute('placeholder', 'Digite o seu nome');
        botaoPrincipal.innerHTML = 'Continuar';
    } else if(paginaAtual === 2){
        caixaPrincipal.innerHTML = `${nome}, com que frequencia você consome produto de origem animal ?`;
        inputRange.value = '50';
        labelRange.innerHTML = "50%";
        caixaPrincipal.appendChild(inputRange);
        caixaPrincipal.appendChild(labelRange);
    }
}