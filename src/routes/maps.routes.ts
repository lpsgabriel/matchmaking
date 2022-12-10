import { Router } from "express";
import { listMapsController } from "../modules/maps/useCases/listMaps";
import { createMapController } from "../modules/maps/useCases/createMap";

export const mapRoutes = Router();

mapRoutes.post("/createmap", (request, response) => {
  return createMapController.handle(request, response);
});

mapRoutes.get("/allmaps", (request, response) => {
  return listMapsController.handle(request, response);
});
