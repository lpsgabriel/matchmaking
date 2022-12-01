import { Map } from "../../model/Map";
import { IMapsRepository } from "../../repositories/IMapsRepository";

class GetMapsService {
  constructor(private mapsRepository: IMapsRepository) {}
  execute() {
    return this.mapsRepository;
  }
}

export { GetMapsService };
