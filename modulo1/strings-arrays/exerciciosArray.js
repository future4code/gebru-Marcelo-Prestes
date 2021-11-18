
1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa

let array
console.log('a. ', array)
//a.  undefined

array = null
console.log('b. ', array)
//b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c.  11

let i = 0
console.log('d. ', array[i])
// d.  3
array[i+1] = 19
console.log('e. ', array)
// e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array[i+6]
console.log('f. ', valor)
//f.  9

2 . Leia o código abaixo com atenção
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// VIMOS IO TORNEIO DE TENNIS 26

//SUBI NUM ÔNIBUS EM MIRROCOS 27



let nomeUsuario = prompt("Informe seu nome: ")
let emailUsuario = prompt("Informe seu e-mail: ")

alert(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)


let comidasFavoritas = ["Arroz, Feijão com guizado", "Arroz com galinha", "Churrasco", "Panqueca", "Massa com guizado" ]

console.log(comidasFavoritas)


for (let i = 0; i < 5; i++)
console.log(comidasFavoritas[i])

/* console.log('1' , comidasFavoritas[0])
console.log('2' , comidasFavoritas[1])
console.log('3' , comidasFavoritas[2])
console.log('4' , comidasFavoritas[3])
console.log('5' , comidasFavoritas[4]) */

let comidaUsuario = prompt("Informe sua comida preferida?")


comidasFavoritas [1] = comidaUsuario;

console.log(comidasFavoritas)

let tarefa1 = prompt("Informe primeira tarefa ")
let tarefa2 = prompt("Informe segunda tarefa ")
let tarefa3 = prompt("Informe terceira tarefa ")


let listaDeTarefas = []

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(`Tarefas para ser realizadas ${listaDeTarefas}`)

console.log(listaDeTarefas)

let retirarTarefa = Number(prompt("Informe a qual terefa de 1 a 3, para ser retirada "))


listaDeTarefas.splice(listaDeTarefas.indexOf(retirarTarefa), 1);

listaDeTarefas.splice(3,retirarTarefa)

console.log(listaDeTarefas)


const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(`Indice do elemento Abacaxi é ${frutas.indexOf("Abacaxi")}, a lista fruatas têm o tamanho ${frutas.length}`)
