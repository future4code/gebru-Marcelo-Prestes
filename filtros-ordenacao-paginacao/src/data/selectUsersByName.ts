import connection from "./connection";

export default async function selectUsersByName(
    name: string
):Promise<any> {
    const result = await connection("aula48_exercicio")
        .where("name", "LIKE", `%${name}%`);
 
    return result;
};