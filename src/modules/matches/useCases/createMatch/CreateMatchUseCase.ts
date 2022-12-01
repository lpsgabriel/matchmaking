import { Player } from "../../../players/model/Player";

export interface Team {
  teamName: string;
  players: Player[];
  teamLevel: number;
}

export interface Match {
  team1: Team;
  team2: Team;
  map: string;
}

class CreateTeamService {
  calculateTeamLevel(teamPlayers: Player[]) {
    return (
      teamPlayers.reduce((previous, current) => previous + current.level, 0) /
      teamPlayers.length
    );
  }
  execute(teamPlayers: Player[]) {
    const team: Team = {
      players: teamPlayers,
      teamName: `Team ${teamPlayers[0].name}`,
      teamLevel: this.calculateTeamLevel(teamPlayers),
    };
    return team;
  }
}

class CreateMatchUseCase {
  randomPlayers: Player[];
  constructor(randomPlayers: Player[]) {
    this.randomPlayers = randomPlayers;
  }

  randomizePlayers() {
    let allPlayers = [...this.randomPlayers];
    let playersTeam1: Player[] = [];
    let playersTeam2: Player[] = [];

    allPlayers.sort((previous, current) => previous.level - current.level);

    for (let i = 0; i < this.randomPlayers.length; i++) {
      if (i % 2 == 0) {
        playersTeam1.push(allPlayers.splice(0, 1).at(0));
      } else {
        playersTeam2.push(allPlayers.splice(0, 1).at(0));
      }
    }

    return { playersTeam1, playersTeam2 };
  }
  execute(map: string): Match {
    const { playersTeam1, playersTeam2 } = this.randomizePlayers();
    const team1 = new CreateTeamService().execute(playersTeam1);
    const team2 = new CreateTeamService().execute(playersTeam2);
    return { team1, team2, map };
  }
}

export { CreateMatchUseCase };
