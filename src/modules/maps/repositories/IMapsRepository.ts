import { Map } from "../model/Map";

interface ICreateMapDTO {
  name: string;
}

interface IMapsRepository {
  list(): Map[];
  create({ name }: ICreateMapDTO): void;
  findByName(name: string): Map;
}

export { IMapsRepository, ICreateMapDTO };
