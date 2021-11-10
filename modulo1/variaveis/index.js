// Exercicios de variaveis
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
 */



let a = 10
let b = 25



c = a
a = b
b = c


console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)