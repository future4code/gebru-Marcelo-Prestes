console.log('Hello Word')

const nome:string = "Juliana"
let idade:number = 35
//idade = 15

let aprovado: boolean = true

console.log( nome, idade)

 let newArray: number[] = [1, 2, 3, 4] 
// newArray = ["a", "b"]
//newArray = []
//newArray = ""
//newArray = [1, 2, "a"]

let array: (number | string) [] = ["a", 1]

let carros: (string  | number) [ ] = [ "Gol", 2014, "Fiesta", 2008 ]


let meuObjeto: {nome: string, idade: number} = {
    nome: "Juliana",
    idade: 35
}

//const novaIdade = meuObjeto.idade

let ano:any = 2022
ano = "2022"
ano = "Juliana"
ano =  true


function soma(a:number, b:number):number {
    return a + b
}

function pessoa (nome:string, idade?:number):void {
    console.log("Pessoa: ", nome, idade)
}

//pessoa()
//pessoa("juliana")
//pessoa("juliana", 35)
//pessoa("Juliana")

const minhaFuncao = (nome:string, callback: ()=> void):void => {
    console.log(nome)
}


// ---- EXERCICIO 3 -----


// function buscarCarrosPorMarca (frota: {marca:string}[], marca?:string):{}[] {

//     if(marca === undefined){
//         return frota
//     }

//     return frota.filter((carro)=>{
//         return carro.marca === marca
//     })
// }


function buscarCarrosPorMarca (frota: {marca:string}[], marca?:string):{}[] {

    if(marca === undefined){
        return frota
    }

    return frota.filter((carro)=>{
        return carro.marca === marca
    })
}


function checaTriangulo(a:number, b:number, c:number): "Escaleno" | "Equilátero" | "Isósceles" {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
///////////////////////////////////////////

  function imprimeTresCoresFavoritas(a:string,b:string,c:string):void {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }

 function checaAnoBissexto(ano:number) {
    const cond1: number = ano % 400 === 0
    const cond2: number= (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }