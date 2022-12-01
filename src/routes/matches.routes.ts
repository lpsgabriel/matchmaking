import { Router } from "express";
import { createMatch } from "../modules/matches/useCases/createMatch/createMatchController";

export const matchRoutes = Router();

//matchRoutes.get("/allmatches", createMix)
matchRoutes.post("/creatematch", createMatch);
