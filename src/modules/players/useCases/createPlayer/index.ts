import { PlayersRepository } from "../../repositories/implementations/PlayersRepository";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";
import { CreatePlayerController } from "./CreatePlayerController";

export const playersRepository = PlayersRepository.getInstance();
export const createPlayerUseCase = new CreatePlayerUseCase(playersRepository);
export const createPlayerController = new CreatePlayerController(
  createPlayerUseCase
);
