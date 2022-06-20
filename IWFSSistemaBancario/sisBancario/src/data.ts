export enum ACCOUNT_TYPE{
    JURIDICA = "JURIDICA",
    FISICA = "FISICA",
    ID_CONTA = "NUMERO"
}

export type Client = {
    id: number, 
    cpf: number,
    name: string, 
    email: string, 
    type: ACCOUNT_TYPE,
    age: number
    transacoes: (name: string[])=> Client
}



export let clients :Client[] = [
    {
        id: 1,
        name: "Alice",
        cpf: 11122233344,
        email: "alice@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 12,
        transacoes: (name: string[])=> Client
    },
    {
        id: 2,
        name: "Bob",
        cpf:11122233355,
        email: "bob@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 36,
        transacoes: (name: string[])=> Client
    },
    {
        id: 3,
        name: "Roberto",
        cpf:11122233366,
        email: "roberto@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 21,
    },
    {
        id: 4,
        name: "Ronaldo",
        cpf:11122233377,
        email: "ronaldo@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 17,
    },
    {
        id: 5,
        name: "Marta",
        cpf:11122233388,
        email: "marta@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        cpf:11122233399,
        email: "fred@email.com",
        type: ACCOUNT_TYPE.FISICA,
        age: 60,
    },
]





export type transaction = {
   deposito: number,
   saque: number,
   extrato: number,
   pagamento: number,

}