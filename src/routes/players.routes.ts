import { Router } from "express";
import { createPlayerController } from "../modules/players/useCases/createPlayer";

export const playerRoutes = Router();

playerRoutes.post("/createplayer", (request, response) => {
  return createPlayerController.handle(request, response);
});
//playerRoutes.get("/allplayers", getPlayers);
