const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])
/* 
Matheus Nachtergaele
Virginia Cavendish
Object1
canal: "Globo"
horario: "14h"

*/
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

//{nome: 'Juca', idade: 3, raca: 'SRD'}
//{nome: 'Juba', idade: 3, raca: 'SRD'}
//{nome: 'Jubo', idade: 3, raca: 'SRD'}
// Copia as parametros e cola no novo objeto


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))
//false
// backender está definido como false, e altura não foi definido
/* 

const colaborador = {
	nome : "Raphael",
	apelidos["Barba","Mindingo","Paulista"],
	
}

 */

function novoColaborador(pessoa) {
	const novoColabor = {
	  ...pessoa,
	  nome: "Silvestre",
	  apelidos: ["Macho", "Moreno", "Nortista"],
	  idade: 23, 
	  backender: false,
	  melhorAmigo: {
		nome: "Carolaine",
		idade: 24
	  }
	}
	console.log(`Eu sou , ${novaPessoa.nome},  mas pode me chamar de: ,${novaPessoa.apelidos[0]},${novaPessoa.apelidos[1]} ou , ${novaPessoa.apelidos[2]} `)

}
novoColaborador(pessoa)