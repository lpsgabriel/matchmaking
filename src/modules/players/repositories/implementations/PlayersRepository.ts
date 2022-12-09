import { Player } from "../../model/Player";
import { IPlayersRepository, ICreatePlayerDTO } from "../IPlayersRepository";

class PlayersRepository implements IPlayersRepository {
  private players: Player[];

  private static INSTANCE: PlayersRepository;

  private constructor() {
    this.players = [];
  }

  public static getInstance(): PlayersRepository {
    if (!PlayersRepository.INSTANCE) {
      PlayersRepository.INSTANCE = new PlayersRepository();
    }
    return PlayersRepository.INSTANCE;
  }

  create({ name, level }: ICreatePlayerDTO) {
    const player = new Player();

    player.name = name;
    player.level = level;
    player.createdAt = new Date();

    this.players.push(player);
  }
  list(): Player[] {
    return this.players;
  }
}

export { PlayersRepository };
