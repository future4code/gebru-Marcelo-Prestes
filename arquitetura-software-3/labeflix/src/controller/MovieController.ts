import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";




export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const {title, description, durationInMinutes, yearOfRelease } = req.body;

      const movieBusiness = new MovieBusiness()
      await movieBusiness.create({ title, description, durationInMinutes, yearOfRelease });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

 
}
