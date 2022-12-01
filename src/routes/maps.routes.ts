import { Router } from "express";
import { createMap } from "../modules/maps/useCases/createMap/createMapController";
import { getMaps } from "../modules/maps/useCases/getMaps/getMapsController";
import { MapsRepository } from "../modules/maps/repositories/MapsRepository";

export const mapRoutes = Router();
export const mapsRepository = new MapsRepository();

mapRoutes.post("/createmap", createMap);
mapRoutes.get("/allmaps", getMaps);
