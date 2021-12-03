
/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
Será impresso 10
*/

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// a) O que vai ser impresso no console? Impressos os números 18, 19, 21, 23, 25, 27, 3
//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Sim seria suficiente, precisariamos fazer conforme abaixo
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  		console.log(numero)
	}

*/


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
9
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
/*
*
**
***
****
*/

/*
let animalEstimacao = Number.prompt("Informe o número de animais de estimaçao que você têm");

if(animalEstimacao <0){
    console.log("Que pena! Mas você pode adotar uma bichinho");

} else if  (animalEstimacao >0){

    console.log("Favor informar o número de animais você têm")

        let animais = [];

		for (cont=0;cont<5;cont++){
            animais.push(prompt("Digite os nomes dos seus animais ", ""));
		}

		for (cont=0;cont<5;cont++){
			console.log(animais[cont]);
		}
    }
*/