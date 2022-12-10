import { IPlayersRepository } from "../../repositories/IPlayersRepository";

class ListPlayersUseCase {
  constructor(private playersRepository: IPlayersRepository) {}
  execute(){
    const players = this.playersRepository.list();
    return players;
  }
}

export { ListPlayersUseCase };
