EX1
```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {```
``` // Escreva seu código aqui```
```let salario = 2000;```
```let comissaVensa = qtdeCarrosVendidos*100+(valorTotalVendas*0.05)```
```let resultado = salario + comissaVensa```
 ```return resultado```
 ```console.log(calculaSalario(3,130000))}```



Ex2


```function calculaPrecoTotal(quantidade) {```
```let quantidade```
```let valorCompra```
```let preco1 = 1.30```
```let preco = 1.00```

```if(quantidade < 12){```
 ``` return valorCompra = quantidade * preco1```
```}else if (quantidade >= 12){```
```return valorCompra = quantidade * preco```
```} console.log(quantidade(2)) }```


Ex 3
```function calculaNota(ex, p1, p2) {```
``` // EscEreva seu código aqui```
```let media = ((ex*1)+(p1*2)+(p2*3))/(1+2+3)```
```(media >= 9) {```
```console("Você tirou conceito A")```
```}else if(media <9 && >= 7.5 ) {```
```console("Você tirou conceito B")```
```} else if (media <7.5 && ==6){```
```console("Você tirou  conceito C")```
``` } else{```
``` console("Você tirou conceito D")```
``` } return media```
```} console.log calculaNota(10,5,7)```





EX4
```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {```
  ```let arrayDeNumeros: [1,4,8,2,5,4,2,4,7,5] let quantidade = 0```
	``` ```
 ``` let numeroEscolhido = 4```
  ```for (let number of arrayDeNumeros){```
  ```  if (number === numeroEscolhido){```
  ```    quantidade++ ```
  ```  }```
 ``` }```

  ```if(quantidade === 0){   return "Número não encontrado" ```
	```	 ```
 ``` } else {```
  ```  return `O número ${numeroEscolhido} aparece ${quantidade}x` ```
  }
 ``` console.log()```
ex5


```function criarArrayNomesAnimais() {```
```  const animais = ``` ``` [```
 ``` { nome: "Cachorro", classificacao: "mamífero" },```
 ``` { nome: "Papagaio", classificacao: "ave" },```
``` { nome: "Gato", classificacao: "mamífero" },```
```{ nome: "Carpa", classificacao: "peixe" },```
```{ nome: "Pomba", classificacao: "ave" }```
```];```
```  const exibeNomes = animais.map((animais) => animais.nome);```
```  // Escreva seu código aqui```
 ```return exibeNomes; }```
ex6

```function filtraTarefas() {```
```  const tarefas = [```
   ``` { titulo: "Fazer Remember", status: "done", tempo: 30 },```
  ```  { titulo: "Fazer Challange", status: "todo", tempo: 30 },```
   ``` { titulo: "Assistir Aula", status: "done", tempo: 120 },```
  ```  { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },```
  ```  { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },```
  ```  { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },```
  ```  { titulo: "Fazer desafio", status: "doing", tempo: 60 },```
 ```   { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },```
  ```  { titulo: "Enviar Feedback", status: "todo" , tempo: 15 },```
  ```  { titulo: "Enviar Exercício", status: "todo", tempo: 15 },```
 ```   { titulo: "Jogar Videogame", status: "todo", tempo: 120 },```
 ```   { titulo: "Assistir Novela", status: "todo", tempo: 90 }```
``` ]```
```const status = tarefas.filter(tarefa=>tarefa.status === "done")```
``` // Escreva seu código aqui```
```const nomeTarefa = status.map(nome=>nome.titulo)```gi
```return nomeTarefa  ```

