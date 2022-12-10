import { Request, Response } from "express";
import { ListMapsUseCase } from "./ListMapsUseCase";

class ListMapsController{
  constructor(private listMapsUseCase: ListMapsUseCase){}

  handle(request: Request, response: Response) {
    const createMap = this.listMapsUseCase.execute();
    return response.status(201).json(createMap);
  }
}

export { ListMapsController };

