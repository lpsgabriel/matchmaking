import { Request, Response } from "express";
import { GetMapsService } from "./GetMapsUseCase";
import { mapsRepository } from "../../../../routes/maps.routes";

export function getMaps(request: Request, response: Response) {
  const createMap = new GetMapsService(mapsRepository).execute();
  return response.status(201).json(createMap).send();
}
