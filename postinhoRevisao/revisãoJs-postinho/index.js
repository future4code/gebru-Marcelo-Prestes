/*a-)Função:
 function nomeDaFuncao(parâmetros){}
b-)Arrow function 
const nomeDaFuncao=(parâmetros)⇒{}*/

// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

const checarIgualdade = (a, b) =>{
    //  Sua lógica aqui

    return `No comparador de igualdade ${a}==${b} é ${a === b}`
}
console.log(checarIgualdade(2, 2));
// c-)Faça uma função chamada "verificaSeEMaior"

const verificaSeEMaior =(num1, num2)=>{

    return `Comparando o primeiro número ${num1} e o segundo número ${num2} o primeiro e maior ${nume1 > num2}?`

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=  false
// b-) 1=='1'= false
// c-) 'a'==='b'= true
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

function cadastro () {
    //  Sua lógica aqui
    const usuario = []
    const nomeDoUsario = prompt("Informe seu nome");
    const anoDeNascimento = Number(prompt("Informe seu ano de nascimento: "));
    const anoAtual = 2022
    const idade = anoDeNascimento - anoAtual
    while (idade > 18) {
        if(idade <18){
            break ;
            alert("Devido ser menor de idade, nãp pode seguir com seu cadastro ")
        }
    }




    const senhaDoUsuario = Number(prompt("Digite sua senha: "));
    const nacionalidade = prompt('Informe sua nacionalidade')
   

    usuario.push(nomeDoUsario)
    usuario.push(anoDeNascimento)
    usuario.push(senhaDoUsuario)
    usuario.push(nacionalidade)
  

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

//const login = () => {
    const login = "labenu"
    //  Sua lógica aqui

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

//const primeiraDose = () => {

    //  Sua lógica aqui


//}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

/*const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());*/