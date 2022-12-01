import { PlayersRepository } from "../../repositories/PlayersRepository";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";
import { CreatePlayerController } from "./CreatePlayerController";

export const playersRepository = new PlayersRepository();
export const createPlayerUseCase = new CreatePlayerUseCase(playersRepository);
export const createPlayerController = new CreatePlayerController(createPlayerUseCase)