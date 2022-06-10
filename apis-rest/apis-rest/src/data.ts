// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.


export enum usuarioTipo {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type Usuario = {
    id: number, 
    name: string, 
    email: string, 
    type: usuarioTipo,
    age: number
}




let users: Usuario [] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: usuarioTipo.NORMAL,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: usuarioTipo.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: usuarioTipo.ADMIN,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: usuarioTipo.ADMIN,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: usuarioTipo.NORMAL,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: usuarioTipo.NORMAL,
        age: 60
    }
]