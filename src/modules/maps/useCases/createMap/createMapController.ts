import { Request, Response } from "express";
import { CreateMapService } from "./CreateMapUseCase";
import { mapsRepository } from "../../../../routes/maps.routes";

interface IRequest {
  name: string;
  level: number;
}

export function createMap(request: Request, response: Response) {
  const { name } = request.body as IRequest;
  new CreateMapService(mapsRepository).execute(name);
  return response.status(201).send();
}
