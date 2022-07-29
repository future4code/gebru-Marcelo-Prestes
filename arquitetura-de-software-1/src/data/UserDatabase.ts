import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {

   insertUser = async(user: user):Promise<void> => {
      try {
      await UserDatabase.connection.insert({
         id: user.id,
         name: user.name,
         nickname: user.nickname,
         email: user.email,
         password: user.password
      }).into('Architecture_User')
      } catch (error:any) {
         throw new Error(error.message)
      }

   }
}