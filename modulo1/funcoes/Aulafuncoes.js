
// - //Exercícios de interpretação de código
    
//     //Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     //1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
        
//         let a = 10
//         let b = 10
        
//         console.log(b)
           //RESEULTADO SERIA ( 10)
//         b = 5
//         console.log(a, b)
//         RESEULTADO SERIA ( 10 , 5)
        
//     2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
        
//         let a = 10
//         let b = 20
//         c = a
//         b = c
//         a = b
        
//         console.log(a, b, c)
//         RESEULTADO SERIA ( 10 , 10 ,10)
        
//     3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
        
//        
//         let p = prompt("Quantas horas você trabalha por dia?")
//         let t = prompt("Quanto você recebe por dia?")
//         alert(`Voce recebe ${t/p} por hora`)

           // SUGESTÃO DE NOMES PARA AS VARIÁVEIS
           //Let horaDia
           //Let ValorHora




//Exercícios de escrita de código
//1 exercerio 

// let nome
// console.log(typeof nome)

// let idade
// console.log(typeof idade)

//Resultado e undefind, devido as vaiaveis não terem valor algum atribuidos, assim não possível definifir que tipo elas são


// let nome = prompt('Qual é o seu nome completo?')
// let idade = prompt('Qual é a sua idade?')

// console.log('Olá' ,nome,  'você tem' ,idade, 'anos')

//2 - exercerio 

/* let almoco = prompt('Você almoçou hoje?')
console.log('Você almoçou hoje?' ,almoco)

const estudo = prompt("Foram bons seus estudos nessas primeiras semanas na Labenu?")
console.log("Foram bons seus estudos nessas primeiras semanas na Labenu?" , estudo)

const pessoaDev = prompt("Então essa mudanção de carreira para desenvolvedor está valendo?")
console.log("Então essa mudanção de carreira para desenvolvedor está valendo?" ,pessoaDev)
//  */



// let a = 10
// let b = 25



// c = a
// a = b
// b = c


// console.log("O novo valor de a é", a)
// console.log("O novo valor de b é", b)

/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

// console.log("d. ", typeof resultado)
//  */
// let primeiroNumero = parseInt(prompt("Digite um numero!"));
// let segundoNumero = parseInt(prompt("Digite outro numero!"));

// let soma = primeiroNumero + segundoNumero;

/* // alert(soma);

let primeiroNumero = prompt("Digite um numero!");
console.log(primeiroNumero);
let segundoNumero = prompt("Digite outro numero!");
console.log(segundoNumero);

const soma = primeiroNumero + segundoNumero;

console.log(soma) */

function minhaFuncao(variavel) {
	return variavel * 5
}

//console.log(minhaFuncao(2))
// Imprimo 10
//console.log(minhaFuncao(10))
// Imprimo 50
minhaFuncao(2)
minhaFuncao(10)
// Retorna vazio, se for chamado via VSCode
// Mas se for direto no console do navegador ele vai chamar a função e imprimir os resultados corretos, 10 e 50.

/* 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
 */
/* Eu gosto de cenoura // true
CENOURA é bom pra vista
Cenouras crescem na terra */
/* 
const escreveFrase = function(nomeUs, IdadeUs, cidadeUs){
    console.log(`Meu nome e ${nomeUs}, tenho ${IdadeUs} anos e moro em ${cidadeUs}`)
     
}


let nome = "Marcelo Prestes"
let idade = "38"
let cidadeMora = "Porto Alegre"


escreveFrase(nome , idade , cidadeMora )
 */

/* const escreveFrase = function(nomeUs, IdadeUs, cidadeUs){
    console.log(`Meu nome e ${nomeUs}, tenho ${IdadeUs} anos e moro em ${cidadeUs}`)
     
}


let nome = prompt("Informe seu nome ")
let idade = prompt("Informe sua idade ")
let cidadeMora = prompt("Onde você mora ")


escreveFrase(nome , idade , cidadeMora ) */
/* 
const somaNumeros = (num1, num2) => num1 + num2

console.log(somaNumeros(25, 25)) */



/* const validarNumer = (num1, num2)=> {
    
        if (num1 > num2 || num1 == num2  ){

    console.log("Verdadeiro")

} else {
    console.log("Falso")
    }

}

 const numeroUm =  prompt("informe o numero um ")
 const numeroDois = prompt("informe o numero dois ")


 console.log(validarNumer(numeroUm,numeroDois )) */


// function parImpar(numeUs) 

/* 
const parImpar = (numeUs) =>{
 
    if(numeUs%2 == 0) {
        console.log("Valor é par ")
    } else {
        console.log("Valor é impar ")
    }
 return
}

 let informeNu = Number(prompt("Informe uma número para sabermos se é par ou Impar"))

console.log(parImpar(informeNu)) */




/* 
function frase(str1, str2 )
{
    str1.length()
    str2.toLowerCase()
        return
}

 const escrevaFrase = prompt("Informe uma frase")

console.log(str1(escrevaFrase))
console.log(str2(escrevaFrase))

 */
/* 
let somar = function(num1, num2){
    let resultado = num1 + num2
    return resultado
}

let numSomU = Number(prompt("Informe uma numero um"))
let numSomD = Number(prompt("Informe uma numero dois"))

console.log(somar(numSomU,numSomD))

 


let subritair = function(num1, num2){
    let resultado = num1 - num2
    return resultado
}

let numSubU = Number(prompt("Informe uma numero um"))
let numSubD = Number(prompt("Informe uma numero dois"))

console.log(subritair(numSubU,numSubD))


let dividr = function(num1, num2){
    let resultado = num1 / num2
    return resultado
}

let numDivU = Number(prompt("Informe uma numero um"))
let numDivD = Number(prompt("Informe uma numero dois"))

console.log(subritair(numDivU,numDivD))



let mult = function(num1, num2){
    let resultado = num1 * num2
    return resultado
}

let numMultU = Number(prompt("Informe uma numero um"))
let numMultD = Number(prompt("Informe uma numero dois"))

console.log(subritair(numMultU,numMultD))


*/
