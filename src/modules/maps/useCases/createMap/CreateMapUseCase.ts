import { IMapsRepository } from "../../repositories/IMapsRepository";

class CreateMapUseCase {
  constructor(private mapsRepository: IMapsRepository) {}
  execute(name: string) {
    const mapAlreadyExists = this.mapsRepository.findByName(name);

    if (mapAlreadyExists) {
      throw new Error("Map already exists!");
    }

    this.mapsRepository.create({ name });
    return this.mapsRepository;
  }
}

export { CreateMapUseCase };
