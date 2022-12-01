import { Player } from "../modules/players/model/Player";
import {
  IPlayersRepository,
  ICreatePlayerDTO,
} from "../modules/players/repositories/IPlayersRepository";

class PostgresPlayersRepository implements IPlayersRepository {
  list(): Player[] {
    return null;
  }
  create({ name, level }: ICreatePlayerDTO): void {
    console.log(name, level);
  }
}

export { PostgresPlayersRepository };
