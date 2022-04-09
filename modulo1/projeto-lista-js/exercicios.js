// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt('Informe a altura'))
const largura = Number(prompt('Informe a largura'))
//console.log(altura * largura)
} 
calculaAreaRetangulo(3,5)
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual'))
  const anoNasc = Number(prompt('Informe o ano do seu nascimento'))
  console.log( anoAtual - anoNasc)
  
  }

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Insira sua primeira cor favorita')
  const cor2 = prompt('Insira sua segunda cor favorita')
  const cor3 = prompt('Insira sua terceira cor favorita')
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = retornaPrimeiroElemento(array)
  const ultimo = retornaUltimoElemento(array)
  
  array[0] = ultimo
  array[array.length-1] = primeiro
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual'))
  const anoNasc = Number(prompt('Informe o ano do seu nascimento'))
  const anoEmissao = Number(prompt('Informe o ano do seu nascimento')) 

  const idade = anoAtual - anoNasc
  const tempRG = anoAtual - anoEmissao


  const cond1 = idade <=20 && tempRG >=5
  const cond2 = idade > 20 && idade <=50 && tempRG >= 10
  const cond3 = idade > 50 && tempRG >=15

  console.log(cond1 || cond2 || cond3)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const cond1 = ano % 400 === 0
const cond2 = (ano % 4 ===0) && (ano % 100 !==0)
return cond1 || cond2
} 

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorIdade = prompt ("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você possui ensino médio completo?")
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

console.log(maiorIdade=== "sim" && ensinoMedio === "sim" && disponibilidade === "sim")
}


