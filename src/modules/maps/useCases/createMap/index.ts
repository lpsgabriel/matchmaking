import { MapsRepository } from "../../repositories/implementations/MapsRepository";
import { CreateMapController } from "./CreateMapController";
import { CreateMapUseCase } from "./CreateMapUseCase";

const mapsRepository = MapsRepository.getInstance();
const createMapUseCase = new CreateMapUseCase(mapsRepository);
const createMapController = new CreateMapController(createMapUseCase);

export { createMapController };
