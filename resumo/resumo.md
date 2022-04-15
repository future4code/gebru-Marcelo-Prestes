#Funções em JavaScript
##São blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, deve-se declará-la dentro do escopo do qual ela vai ser chamada.



Objeto em JavaScript ⇒ Sintaxe, o que é e como usar

São estruturas de sintaxe que nos permitem representar dados mais complexos de uma maneira mais organizada.
Podem ser inicializados e utilizados new Object(), Object.create(), ou a notação literal. Um inicializador de objetos é uma lista de zero ou mais pares de propiedades: valor, separados por vírgula e fechado por um par de chaves({})

Sintaxe 
var O = {};

Criação de um objeto
objeto: analista
chave:nome, idade, email,
valor: lucas, 25, endereço email
const analista = {
    nome: 'Lucas Prestes',
    idade: 25,
    email: 'lukinhasp@email.com'
}


 Array  ⇒ Sintaxe, o que é e como usar

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

Sintaxe
var frutas = ['Maçã', 'Banana']
console.log(frutas.length)


 Map  ⇒ Sintaxe, o que é e como usar
O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor.

você pode usar o método Array.map() para obter o mesmo resultado. Vemos aqui um exemplo 
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr)

 Filter  ⇒ Sintaxe, o que é e como usar
O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

Sintaxe:
var newArray = arr.filter(callback[, thisArg])

 Diferenças entre Map e Filter
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida
 
 Diferença entre os métodos push e pop e como usá-los
O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. E quanto o método pop() remove o último elemento de um array e retorna aquele elemento.

 Método slice do array  ⇒ Sintaxe, o que é e como usar
 
 O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

 Syntaxe
 arr.slice([inicio[,fim]])

 Método splice do array  ⇒ Sintaxe, o que é e como usar

 O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

 Sintaxe

 array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

array.splice(indice) // SpiderMonkey/Firefox extension