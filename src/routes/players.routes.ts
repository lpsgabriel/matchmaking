import { Router } from "express";
import { createPlayerController } from "../modules/players/useCases/createPlayer";
import { listPlayersController } from "../modules/players/useCases/listPlayers";

export const playerRoutes = Router();

playerRoutes.post("/createplayer", (request, response) => {
  return createPlayerController.handle(request, response);
});

playerRoutes.get("/allplayers", (request, response)=> {
  return listPlayersController.handle(request, response)
});
