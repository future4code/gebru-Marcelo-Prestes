```function filtraTarefas() {ˋˋˋ
 ˋˋˋ const tarefas = [ˋˋˋ
   ˋˋˋ { titulo: "Fazer Remember", status: "done", tempo: 30 },ˋˋˋ
   ˋˋˋ { titulo: "Fazer Challange", status: "todo", tempo: 30 },ˋˋˋ
    ˋˋˋ{ titulo: "Assistir Aula", status: "done", tempo: 120 },ˋˋˋ
   ˋˋˋ { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },ˋˋˋ
    ˋˋˋ{ titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },ˋˋˋ
    ˋˋˋ{ titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },ˋˋˋ
    ˋˋˋ{ titulo: "Fazer desafio", status: "doing", tempo: 60 },ˋˋˋ
   ˋˋˋ { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },ˋˋˋ
    ˋˋˋ{ titulo: "Enviar Feedback", status: "todo", tempo: 15 },ˋˋˋ
    ˋˋˋ{ titulo: "Enviar Exercício", status: "todo", tempo: 15 },ˋˋˋ
   ˋˋˋ { titulo: "Jogar Videogame", status: "todo", tempo: 120 },ˋˋˋ
    ˋˋˋ{ titulo: "Assistir Novela", status: "todo", tempo: 90 }  ]ˋˋˋ
ˋˋˋconst status = tarefas.filter(tarefa=>tarefa.status === "done")ˋˋˋ
 ˋˋˋ// Escreva seu código aquiˋˋˋ
ˋˋˋconst nomeTarefa = status.map(nome=>nome.titulo)ˋˋˋ
 
ˋˋˋreturn nomeTarefa  }ˋˋˋ