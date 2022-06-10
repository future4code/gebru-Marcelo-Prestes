import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Usuario, users, usuarioTipo } from "./data";

const app = express();
app.use(express.json());
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const userss = req.query.User as string

    if (!User) {
      errorCode = 422
      throw new Error("Falta o parâmetro de busca!");

    }
