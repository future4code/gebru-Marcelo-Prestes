import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";


  public insertUser = async (
    user: User
    ) => {
      try{
        await UserDatabase.connection.insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
      })
      .into(this.TABLE_NAME);
    } catch (error:any) {
      throw new Error(error.message)
   }

}
}
