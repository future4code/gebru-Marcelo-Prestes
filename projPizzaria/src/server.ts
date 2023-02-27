import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors'
import path from 'path'
import { router } from './routes';
//http://localhost:3003/files/0fc3f9de55d6b1864cd14eba01be4db3-pizzas2.png

const app = express()

app.use(express.json());
app.use(cors());

app.use(router);

app.use('/files', express.static(path.resolve(__dirname,'..','tmp'))
)



app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error ){
        //Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })

})


app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})

//;