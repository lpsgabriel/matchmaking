import { Map } from "../../model/Map";
import { IMapsRepository, ICreateMapDTO } from "../IMapsRepository";

class MapsRepository implements IMapsRepository {
  private maps: Map[];

  private static INSTANCE: MapsRepository;

  private constructor() {
    this.maps = [];
  }

  public static getInstance(): MapsRepository {
    if (!MapsRepository.INSTANCE) {
      MapsRepository.INSTANCE = new MapsRepository();
    }
    return MapsRepository.INSTANCE;
  }

  create({ name }: ICreateMapDTO) {
    const map = new Map();

    map.name = name;

    this.maps.push(map);
  }

  list(): Map[] {
    return this.maps;
  }

  findByName(name: string): Map {
    const map = this.maps.find((map) => map.name === name);
    return map;
  }
}

export { MapsRepository };
