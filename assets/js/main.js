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

const inputNumber = document.createElement ('input');
inputNumber.type = 'number';
inputNumber.min = '1';
inputNumber.classList.add('input-number');

const inputRadioSim = document.querySelector('#radio-sim');
const labelRadioSim = document.querySelector('#label-radio-sim');
const inputRadioNao = document.querySelector('#radio-nao');
const labelRadioNao = document.querySelector('#label-radio-nao');

const inputBox = document.createElement('div');
inputBox.classList.add('input-box');
const divRadioSim = document.createElement('div');
divRadioSim.classList.add('radio');
const divRadioNao = document.createElement('div');
divRadioNao.classList.add('radio');

let respostas = [5];
let pontos = [5];
let resultado;
let qtdPlanetas;

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
    } if(paginaAtual === 3){
        respostas[0] = Number(inputRange.value);
    } else if(paginaAtual === 4){
        respostas[1] = Number(inputRange.value);
    } else if(paginaAtual === 5){
        respostas[2] = Number(inputNumber.value);
    } else if(paginaAtual === 6){
        if(inputRadioSim.ckecked){
            respostas[3] = 1;
        } else {
            respostas[3] = 0;
        }
    } else if(paginaAtual === 7){
        respostas[4] = Number(inputRange.value);
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
    } else if(paginaAtual === 3){ 
        inputRange.value = '50';
        labelRange.innerHTML = '50%';
        caixaPrincipal.innerHTML = `${nome}, dos alimentos que consome, qual a porcentagem de comida não processada, não embalada ou cultivada localmente ? `;
        caixaPrincipal.appendChild(inputRange);
        caixaPrincipal.appendChild(labelRange);
    } else if(paginaAtual === 4){
        caixaPrincipal.innerHTML = `${nome}, quantas pessoas residem no seu agregado familiar ?`;
        caixaPrincipal.appendChild(inputNumber);
        inputNumber.value = '1';
    } else if(paginaAtual === 5){
        caixaPrincipal.innerHTML = `${nome}, você tem energia eletrica em casa ?`;
        caixaPrincipal.appendChild(inputBox);
        inputBox.appendChild(divRadioNao);
        inputBox.appendChild(divRadioSim);
        divRadioSim.appendChild(inputRadioSim);
        divRadioSim.appendChild(labelRadioSim);
        divRadioNao.appendChild(inputRadioNao);
        divRadioNao.appendChild(labelRadioNao);
    } else if(paginaAtual === 6){
        caixaPrincipal.innerHTML = `${nome}, com que frequencia viaja de avião anualmente ?`;
        inputRange.value = '50';
        labelRange.innerHTML = '50%';
        caixaPrincipal.appendChild(inputRange);
        caixaPrincipal.appendChild(labelRange);
    } else if(paginaAtual === 7){
        calculaResultado();
    }
}

function calculaResultado () {
    resultado = 0;

    pontos[0] = Math.floor(respostas[0]/5);
    
    let auxiliar = Math.floor(respostas[1]/20)
    pontos[1] = (5 - auxiliar) * 4;

    if(respostas[2] <= 2){
        pontos[2] = 5;
    } else if(respostas <= 5){
        pontos[2] = 10;
    } else {
        pontos[2] = 20;
    }

    pontos[3] = respostas[3] * 20;

    pontos[4] = Math.floor(respostas[4]/5);

    for(let i = 0; i < 5; i++){
        resultado += pontos[i];
    }

    qtdPlanetas = (resultado/20).toFixed(1);
}