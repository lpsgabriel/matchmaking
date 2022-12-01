"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMix = void 0;
const CreateMixService_1 = __importDefault(require("./CreateMixService"));
function createMix(request, response) {
    const teamRogue = [
        { nome: "rogue", level: 20 },
        { nome: "Bahia", level: 15 },
        { nome: "Lil Vito", level: 2 },
        { nome: "Driitz", level: 21 },
        { nome: "suNDay", level: 20 },
    ];
    const teamRain = [
        { nome: "rainnn", level: 5 },
        { nome: "rC", level: 20 },
        { nome: "eazy", level: 14 },
        { nome: "Matty", level: 8 },
        { nome: "dope", level: 18 },
    ];
    const match = {
        team1: teamRogue,
        team2: teamRain,
        map: "de_inferno",
    };
    CreateMixService_1.default.execute(match);
    return response.send();
}
exports.createMix = createMix;
