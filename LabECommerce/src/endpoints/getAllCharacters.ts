import { Request, Response } from "express"
import { off } from "node:process"
import connection from "../connection"
import { character } from "../types"

export default async function getAllCharacters(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, orderBy, orderType, page } = req.query

      // const result: character[] = await connection.raw("SELECT * FROM character")
      // res.send(result[0])

      const resultsPerPage = 5

      // página 1 -> offset 0 === 5 * 0
      // página 2 -> offset 5 === 5 * 1
      // página 3 -> offset 10 === 5 * 2

      const offset = resultsPerPage * (Number(page) - 1)

      debugger

      const characters: character[] = await connection("character")
         .where("name", "LIKE", `%${name}%`)
         .orderBy(orderBy as string || "name", orderType as string)
         .offset(offset)

      res.send(characters)
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}