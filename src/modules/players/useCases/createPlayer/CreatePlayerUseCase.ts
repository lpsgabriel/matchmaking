import { IPlayersRepository } from "../../repositories/IPlayersRepository";

class CreatePlayerUseCase {
  constructor(private playersRepository: IPlayersRepository) {}
  execute(name: string, level: number) {
    this.playersRepository.create({ name, level });
  }
}

export { CreatePlayerUseCase };
