import { MapsRepository } from "../../repositories/implementations/MapsRepository";
import { ListMapsController } from "./ListMapsController";
import { ListMapsUseCase } from "./ListMapsUseCase";

const mapsRepository = MapsRepository.getInstance();
const listMapsUseCase = new ListMapsUseCase(mapsRepository);
const listMapsController = new ListMapsController(listMapsUseCase);

export { listMapsController };
