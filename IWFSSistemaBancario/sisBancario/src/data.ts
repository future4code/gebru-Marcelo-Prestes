export enum ACCOUNT_TYPE{
    JURIDICA = "JURIDICA",
    FISICA = "FISICA"
}

export type Client = {
    id: number, 
    cpf: number,
    name: string, 
    email: string, 
    type: ACCOUNT_TYPE,
    age: number
}



export let clients :Client[] = [
    {
        id: 1,
        name: "Alice",
        cpf:,
        email: "alice@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        cpf:,
        email: "bob@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 36,
    },
    {
        id: 3,
        name: "Roberto",
        cpf:,
        email: "roberto@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 21,
    },
    {
        id: 4,
        name: "Ronaldo",
        cpf:,
        email: "ronaldo@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 17,
    },
    {
        id: 5,
        name: "Marta",
        cpf:,
        email: "marta@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        cpf:,
        email: "fred@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 60,
    },
]

