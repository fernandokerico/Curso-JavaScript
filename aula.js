/* Atividade sobre Array

let dadosDoMeuAmigo=['Lucas',26,'Campo do Tenente'];

console.log(dadosDoMeuAmigo[2]);

let musicasParaCasamento = ("Marcha nupcial");

function alterarMusica(musica, instrumentos){
    musicasParaCasamento = musica + ' ' + instrumentos;
};

console.log(musicasParaCasamento);
alterarMusica("Pompa e Circunstancia");
console.log(musicasParaCasamento);
alterarMusica('Marcha de Wagner');
console.log(musicasParaCasamento);
alterarMusica('ave maria', 'soprano')
console.log(musicasParaCasamento);

INVERTENDO VALORES
let a ='vermelho';
let b = 'azul';

let c=a
a =b
b=c
console.log(a);
console.log(b);
*/

// Escreva uma função que usa 2 números e retorna o maior entre eles
/*
let valorMaior = max(11,9);
console.log(valorMaior);

function max(numero1,numero2){
    if(numero1> numero2)
        return numero1;
    else return numero2;
}
*/

// FizzBuzz
/*
const resultado = fizzBuzz(6);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Não é um numero';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    return entrada;
}
*/

// MEDIDOR DE VELOCIDADE
/*
verificarVelocidade(85);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if( pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos',pontos);
    }
}

// Receber uma quantidade de valores para avaliar funções exibe se cada valor é par ou ímpar

exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if ( i% 2 === 0)
            console.log(i,'par');
        else
            console.log(i,'impar');
    }
}



// Multiplos de 3 (3,6,9)
//Multiplos de 5 (5,10)

somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5=0;
    for (i=0;i<=limite;i++){
        if(i% 3 === 0)
            multiplosDe3 += i;
        if(i %5===0)
            multiplosDe5 +=i;
    }
    console.log(multiplosDe3+multiplosDe5);
}


// Aula 34 - Factory Functions (Função e FÁBRICA)
function criarCelular(marcaCelualr,tamanhoTela,capacidadeBateria){
    return {
        marcaCelualr,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Samsung',5.5,5000);
console.log(celular1);



// AULA 36- NATUREZA DINAMICA DE OBJETOS
const mouse= {
    cor:'red',
    marca:'dazz'
}
mouse.velocidade = 5000;
mouse.trocaDPI =function() {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocaDPI;
console.log(mouse);


const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela :{
        vertical:155,
        horizontal: 75
    },
    ligar:function(){
        console.log("fazendo ligação...");
    }
}

const novoObjeto = Object.assign({
    bateria:5
},celular);
console.log(novoObjeto);

// TIPO PRIMITIVO
const mensagem = 'minha primeira mensagem';
// TIPO OBJETO
const outraMensagem = new String('bom dia');

let endereco = {
    rua:'Estrada Principal da Campina',
    cidade:'Quitandinha',
    cep:'83840-000'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}
exibirEndereco(endereco);



// EXERCICIO 43 - Igualdade de Objetos
function endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('a','b','c');

function saoIguais(endereco1,endereco2) {
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep &&
};

console.log(saoIguais(endereco1,endereco2));
function temEnderecoMemoriaIguais(endereco1,endereco2){
    return endereco1 === endereco3;
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));


// MONTADOR DE POSTAGEM
let postagem = {
    titulo: 'Montador de Postagem',
    mensagem: 'Aprendendo sobre Java',
    autor: 'Fernando',
    visualizacoes : 10,
    comentarios : [
        { autor:'a', mensagem:'b'},
        { autor:'a', mensagem:'b'}
    ],
    estaAoVivo : true
}
console.log(postagem);

// Javascript Aula 46 - Construtor (Exercicio)

// Criar um objeto postagem
// titulo, mensagem, autor, visualizoes, comentarios, estaaovivo
function Postagem(titulo,mensagem,autor){
    this.titulo=titulo,
    this.mensagem=mensagem,
    this.autor=autor,
    this.visualizacoes=0,
    this.comentarios=[],
    this.estaAoVivos=false
}

let postagem= new Postagem('a','b','c');
console.log(postagem);
*/

// JAVASCRIPT AULA53 ADICIONANDO ELEMENTOS
const numeros = [1,2,3];

// Início
numero.unshift(0);
console.log(numeros);
// meio
numeros.splice(1,0,'a');
console.log(numeros);
// final
numeros.push(5);
console.log(numeros);