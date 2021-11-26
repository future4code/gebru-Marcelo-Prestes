//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)
/*
if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
/*
a) Explique o que o código faz. Qual o teste que ele realiza? 
Programa faz a divisão de resto por 2 e igual a 0
b) Para que tipos de números ele imprime no console "Passou no teste"? 
Números pares
c) Para que tipos de números a mensagem é "Não passou no teste"?
Números ímpares

*/
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   
  default:
    preco = 5
    break;
}
console.log("O preço da fruta", fruta ,"é" ,"R$" , preco)
/*a) Para que serve o código acima?
/Código faz a verificação para p usuário o valor conforme o produto que informa

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta Maçã é R$ 2.25
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console,
 se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//Com o Break, seria impresso, o preço da fruta Pêra é R$ 5.5
//Sem o Break, vai pegar o valor informado no Defaukt, assim o que seria impresso é "O preço da fruta Perâ é R$ 5"
*/



const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


//a) O que a primeira linha está fazendo?
// Solicitando um numero para o usuario, já convertido com o Number, assim de fato receber um numeral, comparando se ele é maior que 0
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Não vai trazer uma vez que não foi definido uma condicional para ele ser exibiba.
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Vai ocorrer pois a mensagem está configurada dentro do escopo, da primeira verificação assim, ela não está sendo exibida, mesmo sendo chamada




//let idade = Number(prompt("Informe sua idade "));
function habilitacao(idade){
    if(idade>=18){
        console.log("Você pode dirigir")
    }else{
        console.log("Você não pode dirigir")
    }
}

//habilitacao(idade)


//let turno = prompt("Informe qual turno você estuda, digite M - matutino ou V - Vespertino ou N - Noturno. ")
function turnoEstudo(turno){
    if(turno == "M"){
        console.log("Bom Dia!")
    }
    else if(turno == "V"){
        console.log("Boa Tarde!")
    }
    else if(turno == "N"){
        console.log("Boa Noite!")
    }else if(turno !== "M" ||  "V" || "N"){
        console.log("Você não estuda")
    }
    else{
        console.log("Nenhuma alternativa")
    }
} 
//turnoEstudo(turno)


//const turno = prompt("Informe qual turno você estuda, digite M - matutino ou V - Vespertino ou N - Noturno. ")

/*
switch (turno) {
        case "M":
          alert("Bom Dia!")
        break
        case "V":
            alert("Boa Tarde!")
        break
        case "N":
            alert("Boa Noite!")
        break
        default :
            alert("Você não estuda")
        break

}*/

/*
const InformeGenero = prompt("Informe o gênero do filme que você e seu amigo(a), gostaria de assistir? ")
const valorIngresso = Number( prompt("Voçê poderia informar o valor do ingresso? "))
function GeneroFilme (InformeGenero,valorIngresso){
        if(InformeGenero == "Fantasia" && valorIngresso <= 15){
            console.log("Vamos querer dois ingressos, por favor")
        } else if(InformeGenero !=="Fantasia" && valorIngresso > 15){
            console.log("Queriamos assistir filmes no gênero fantasia, com o valor dentro da realidade, agradecemos, boa noite!")
       } else {
        console.log("Agradeço mas vamos fazer outro programa, boa noite!")
       }
    }   GeneroFilme (InformeGenero,valorIngresso)*/