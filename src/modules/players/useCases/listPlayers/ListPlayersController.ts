import { Request, Response } from "express";
import { ListPlayersUseCase } from "./ListPlayersUseCase";

class ListPlayersController {
  constructor(private listPlayersUseCase: ListPlayersUseCase) {}
  handle(request: Request, response: Response) {
    const all = this.listPlayersUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListPlayersController };
