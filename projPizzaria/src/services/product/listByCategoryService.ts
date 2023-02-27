import prismaClient from "../../prisma";
interface ProductRequest{
    category_id: string;
}

class listByCategoryService{
    async execute({category_id}: ProductRequest){
        //id-produto 
     const findByCategory = await prismaClient.product.findMany({
        where:{
            category_id:category_id 
        }
     })

return findByCategory;

    }
}

export {listByCategoryService}