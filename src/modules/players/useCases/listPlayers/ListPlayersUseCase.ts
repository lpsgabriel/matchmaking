import { IPlayersRepository } from "../../repositories/IPlayersRepository";
import { Player } from "../../model/Player";

class ListPlayersUseCase {
  constructor(private playersRepository: IPlayersRepository) {}
  execute(){
    const players = this.playersRepository.list();
    return players;
  }
}

export { ListPlayersUseCase };
