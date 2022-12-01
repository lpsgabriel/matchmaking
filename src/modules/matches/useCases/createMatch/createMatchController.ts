import { Request, Response } from "express";
import { CreateMatchUseCase } from "./CreateMatchUseCase";
import { Player } from "../../../players/model/Player";

interface IRequest {
  players: Player[];
  map: string;
}

export function createMatch(request: Request, response: Response) {
  /*
  // const teamRogue: Player[] = [
  //   { nome: "rogue", level: 20 },
  //   { nome: "Bahia", level: 15 },
  //   { nome: "Lil Vito", level: 2 },
  //   { nome: "Driitz", level: 21 },
  //   { nome: "suNDay", level: 20 },
  // ]
  // const teamRain: Player[] = [
  //   { nome: "rainnn", level: 5 },
  //   { nome: "rC", level: 20 },
  //   { nome: "eazy", level: 14 },
  //   { nome: "Matty", level: 8 },
  //   { nome: "dope", level: 18 },
  // ]
  */
  const { players, map } = request.body as IRequest;
  const match1 = new CreateMatchUseCase(players);
  const match = match1.execute(map);
  return response.status(201).json(match).send();
}
