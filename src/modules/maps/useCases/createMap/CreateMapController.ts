import { Request, Response } from "express";
import { CreateMapUseCase } from "./CreateMapUseCase";

interface IRequest {
  name: string;
  level: number;
}

class CreateMapController {
  constructor(private createMapUseCase: CreateMapUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body as IRequest;
    this.createMapUseCase.execute(name);
    return response.status(201).send();
  }
}

export { CreateMapController };
