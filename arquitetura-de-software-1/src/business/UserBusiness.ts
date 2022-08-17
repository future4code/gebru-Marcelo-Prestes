import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness {
    createUser = async ( input:any ):Promise<void> => {
        try {
            const {name, nickname, email, password} = input
           if (
              !name ||
              !nickname ||
              !email ||
              !password
           ) {
              throw new Error('Preencha os campos "name","nickname", "email" e "password"')
           }
     
           const id: string = Date.now().toString()

           const useDatabase = new UserDatabase()
           await useDatabase.insertUser({
            id,
            name,
            nickname,
            email ,
            password 
           })
                
        } catch (error:any) {
            throw new Error(error.message)
        }
     }



}