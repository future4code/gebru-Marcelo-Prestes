import prismaClient from '../../prisma';

interface CategoryRequest{
    name: string;
}
//378345
export class CreateCategoryService{
    async execute({name}: CategoryRequest){

        if(name === ''){
            throw new Error('Name invalid')
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    }
}

