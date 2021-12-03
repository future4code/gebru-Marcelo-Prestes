/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
//Vai ser impresso um objeto com os nomes e apelidos dos usuarios

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

//'Amanda Rangel', 'Laís Petra', 'Letícia Chijo']*/
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  {nome: 'Amanda Rangel', apelido: 'Mandi'}
  {nome: 'Laís Petra', apelido: 'Laura'}


*/

/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 a) Crie um novo array que contenha apenas o nome dos doguinhos
 
 
 const arrayDoguinhos = pets.map((item, array) => {
    return item.nome
 })
 
 console.log(arrayDoguinhos) */
 
 
/*
b) Crie um novo array apenas com os [cachorros salsicha]

const pegarsalsicha = (pets ) => {
return pets.raca === "Salsicha"
}


const cachorrosSalsicha = pets.filter(pegarsalsicha)
console.log( cachorrosSalsicha )

*/
/*
c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const dogPoodles = (pets) => {
    return pets.raca === "Poodle"

}

    const pegaPoodle = pets.filter(dogPoodles)
    console.log(pegaPoodle)
    const nomesPoodles = pegaPoodle.map((pets ) =>{
            return pets.nome
        }
    )
        console.log(( `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomesPoodles}` ))
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

     const arrayProdutos = produtos.map((item, preco, array) => {
        return item.nome
     })
     
    // console.log(arrayProdutos)
    const produtoNome = produtos.map((item, array) =>{
        return item.nome
    
    })

    const produtopreco = produtos.map((item,array) =>{
        
        return item.preco
        
    })


    console.log("São esses os "(produtoNome), "coms os preços acrecidos de 5%" ,(produtopreco))*/


