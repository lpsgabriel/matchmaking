import { PlayersRepository } from "../../repositories/PlayersRepository";
import { ListPlayersController } from "./ListPlayersController";
import { ListPlayersUseCase } from "./ListPlayersUseCase";

const playersRepository = new PlayersRepository();
const listPlayersUseCase = new ListPlayersUseCase(playersRepository);
const listPlayersController = new ListPlayersController(listPlayersUseCase);

export { listPlayersController }