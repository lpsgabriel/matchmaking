import { Player } from "../model/Player";

interface ICreatePlayerDTO {
  name: string;
  level: number;
}

interface IPlayersRepository {
  list(): Player[];
  create({ name, level }: ICreatePlayerDTO): void;
}

export { IPlayersRepository, ICreatePlayerDTO };
