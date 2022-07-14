/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
// // import CustomError from '../interfaces/custom.error';
// import IMatche from '../interfaces/Matches';
// import ILeaderBoard from '../interfaces/Leaderboard';
import Teams from '../database/models/Teams';
// import ITeams from '../interfaces/Teams';
import Matches from '../database/models/Matches';
import { goalsFavor, goalsOwn, totalPoints, totalGames,
  totalVictores, totalDraws, totalLosses } from '../utils/functions';
// import MatcheService from './MatchesService';

export default class LeatherBoardService {
  // eslint-disable-next-line max-lines-per-function
  public homeTeamRankingService = async () => {
    const matches = await Teams.findAll(
      { include: [
        { model: Matches,
          as: 'matchesHome',
          where: { inProgress: false },
        },
      ] },
    );

    const allTeams = matches.map((team:any) => {
      const totalPointsFunc = totalPoints(team.matchesHome);
      const totalPointsGames = totalGames(team.matchesHome);

      return {
        name: team.teamName,
        totalPoints: totalPoints(team.matchesHome),
        totalGames: totalGames(team.matchesHome),
        totalVictories: totalVictores(team.matchesHome),
        totalDraws: totalDraws(team.matchesHome),
        totalLosses: totalLosses(team.matchesHome),
        goalsFavor: goalsFavor(team.matchesHome),
        goalsOwn: goalsOwn(team.matchesHome),
        totalBalance: goalsFavor(team.matchesHome) - goalsOwn(team.matchesHome),
        efficiency: Number(((((totalPointsFunc) / (totalPointsGames * 3)) * 100)).toFixed(2)),
      };
    });
    return allTeams;
  };
}
