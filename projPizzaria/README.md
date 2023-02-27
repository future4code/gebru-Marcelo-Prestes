

A parte Front
Descrição do Projeto
Queremos desenvolver um pequeno aplicativo da web que permita aos usuários pedir pizza.

Esse cliente fará interface com a API criada na parte de back-end do desafio.

Primeiramente mostraremos a lista de pizzas com ingredientes e preços. Os dados serão carregados de /api/pizzas.

Quando o usuário escolher algo da lista, o resumo do pedido será atualizado dinamicamente.

Haverá um botão para confirmar o pedido. Uma chamada ajax será realizada /api/ordere o resultado será exibido como uma mensagem como esta: "Seu pedido foi cofirmado. Resumo do pedido: ...".


Backend
Project description
Pizzeria

Este aplicativo serve para expor uma API JSON para ser consumida por um cliente frontend para pedir pizza.

As seguintes entidades devem ser criadas (incluindo relações adequadas):

pizza - tem nome e preço (por exemplo, Margherita $ 5, Pepperoni $ 6, ...)
ordem - tem itens
item do pedido - tem uma pizza e quantidade
Os seguintes endpoints devem retornar uma resposta JSON:

/api/orders (list of orders)
/api/orders/:id (details of an individual order)


[
  {
    "nome" : " Marguerita " ,
    "preço" : 5 ,
    "ingredientes" : [
      " tomate " ,
      " mussarela "
    ]
  },
  {
    "nome" : " Búfala " ,
    "preço" : 6 ,
    "ingredientes" : [
      " tomate " ,
      " mussarela de búfala "
    ]
  },
  {
    "nome" : " Romana " ,
    "preço" : 5 ,
    "ingredientes" : [
      " tomate " ,
      " mussarela " ,
      " anchovas " ,
      " orégano " ,
      " óleo "
    ]
  },
  {
    "nome" : " Diavola " ,
    "preço" : 7,5 ,
    "ingredientes" : [
      " tomate " ,
      " mussarela " ,
      " salame picante "
    ]
  },
  {
    "nome" : " Pizza Bianca " ,
    "preço" : 5 ,
    "ingredientes" : [
      " mussarela " ,
      " orégano "
    ]
  }
]