//let idade = 5;
//console.log(idade);
//let altura = 180;
//console.log(altura);
//let valorIngressoAdulto = 20;
//valorIngressoAdulto = 30;
//console.log(valorIngressoAdulto )
//let nome = 'Heitor';  //string literal
//let idade = 27; // number leteral pode acresentar numeros decimais
//let estaAprovado = true; // boolean serve para exemplo aprovar um login
//let sobrenome = undefined; //Undefined
//let pessoa = {
  //  nome:'Heitor',
    //idade: 27,
    //estaAprovado: true,
    //sobrenome :'Lima'

//};

//console.log(pessoa);

//let corSelecionado = null // serve para resertar um valor exemplo ta criando um sistema q user escolhi a cor do fundo da pagina/redefinir 1 valor
//usar o typeof para identificar scrng no console,posso alterar isso p o Js e Dinamico e pode ser alterado a qualquer momento para excluir no console use a tecla ctrl + l
//arrays e um cojunto de dados que pode ser acessado por um indice

//let familia = [26,45,50,17];
//console.log(familia[2]);

//Funcao e verbo + substantivo
//let corSite = "azul";
//function resetaCor(cor){
//corSite = cor;

//};

//console.log(corSite);
//resetaCor("vermelho");
//console.log(corSite)

//(Mini-Projeto 1) - Trocando Valores de Variáveis - Laço Do..While/Loop Do.. While- Laço For..In/Loop For..In- Laço For..Of/Loop For..Of
let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);
// If..Else
//Se a Hora estiver entre 06:00 ate 12:00 : Bom Dia! Se estiver entre 12:00 ate 18:00 : Boa Tarde! Caso Contrario e Boa Noite !
let hora = 10;
if (hora > 6 && hora< 12){
    console.log("Bom Dia!")

//codigo a ser executado
}
else if (hora > 12 && hora < 18){
    console.log('boa tarde');

    //codigo a ser executado
    }
else {
    console.log("Boa Noite!")
    //codigo a ser executado
}
//Switch..Case
let permissao; //comum,gerente,diretor
permissao = 'comum';
switch (permissao){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
        console.log('usuario gerente');
        break;

        case 'diretor':
        console.log('usuario diretor');
        break;

     default:
         console.log('Usuario nao reconhecido');
}

//Laço For/Loop For
for(let i = 0; i < 5; i++) {
    console.log('Estou aprendendo',i);
    
    //for(let i = 1; i <= 5; i++) {
       // if(i % 2 !== 0) {
       //console.log(i);
        //}
}
//Laço While/Loop While
let i = 5;
while (i >= 1){
if (i % 2 !==0){
    console.log(i);
}
i--;
}

//(Mini-Projeto 2) - Máximo Entre Dois Valores
//Escreva uma função que usa 2 numeros e retorna o maior entre eles
let valorMaior = max(5,9);
console.log(valorMaior);
function max(numero1,numero2){
if (numero1 > numero2)
return numero1;
else return numero2;
}

//(Mini-Projeto 3) - FizzBuzz 
const resultado = fizzBuzz(15);
console.log(resultado);
function fizzBuzz(entrada) {
if ( typeof entrada !== 'number')
return 'Não e um numero';
if ( entrada % 3 === 0) (entrada % 5 === 0)
return 'FizzBuzz';
if (entrada % 3 === 0)
return 'Fizz';
if (entrada % 5 === 0)
return 'Buzz'

return entrada;
}
