// EXERCÍCIO 01 Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
const arrayFilhos = ["Marcio", "Marcelo", "Alex", "Elizandra", "Andreza"]
function retornaTamanhoArray(array) {
   return array.length()

}

console.log(retornaTamanhoArray(arrayFilhos))

// EXERCÍCIO 02
let arrayMeusFilhos = ["Vinicius", "Lucas", "Safira", "Leona"]

function retornaArrayInvertido(array) {
        return array.reverse();
    
}
console.log(retornaArrayInvertido(ararrayMeusFilhosray))


// EXERCÍCIO 03
const valores = [33 , 85 ,25 ,78 ,15]
function retornaArrayOrdenado(array) {
    return array.sort()
}
console.log(retornaArrayOrdenado(valores))

// EXERCÍCIO 04

const numerAleatorios = [33, 75, 86 ,54 ,23 ,22, 38 ,15 ,12]
function retornaNumerosPares(array) {
  return array.filter(array => array.every(n => n % 2 ===0)  );
}
console.log(retornaNumerosPares(numerAleatorios))


// EXERCÍCIO 05

 function retornaNumerosParesElevadosADois(array) {
     
            
 }

// EXERCÍCIO 06
const arraMaior = [99, 101,25, 22, 33, 38]

function retornaMaiorNumero(array) {
    return Math.max(array)
            
}

console.log(retornaNumerosParesElevadosADois(arraMaior))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const maiorNum = Math.max(num1, num2);
const menorNum = Math.min(num1, num2);

const objeto = {
    numeroMaior: maiorNum,
    numeroMenor: menorNum 
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeroPar = []
   for (let i of n){
       if(i % 2===0){
           numeroPar.push(i)
       }
   }return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   