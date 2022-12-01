import { Router } from "express";
import { matchRoutes } from "./matches.routes";
import { playerRoutes } from "./players.routes";
import { mapRoutes } from "./maps.routes";

export const apiRoutes = Router()

apiRoutes.use("/matches", matchRoutes)
apiRoutes.use("/players", playerRoutes)
apiRoutes.use("/maps", mapRoutes)