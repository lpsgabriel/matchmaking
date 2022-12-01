import { Request, Response } from "express";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

interface IRequest {
  name: string;
  level: number;
}

class CreatePlayerController {
  constructor(private createPlayerUseCase: CreatePlayerUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, level } = request.body;
    this.createPlayerUseCase.execute(name, level);
    return response.status(201).send();
  }
}

export { CreatePlayerController };
