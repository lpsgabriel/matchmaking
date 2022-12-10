import { IMapsRepository } from "../../repositories/IMapsRepository";

class ListMapsUseCase {
  constructor(private mapsRepository: IMapsRepository) {}
  execute() {
    return this.mapsRepository;
  }
}

export { ListMapsUseCase };
