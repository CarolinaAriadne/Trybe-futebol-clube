// import CustomError from '../interfaces/custom.error';
import { any } from 'joi';
import IMatche from '../interfaces/Matches';
import ILeaderBoard from '../interfaces/Leaderboard';
// import Teams from '../database/models/Teams';
// import ITeams from '../interfaces/Teams';
import Matches from '../database/models/Matches';

export default class LeatherBoardService implements ILeaderBoard {
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
  public homeTeamRankingService = async () => {
    const quantifyGoals = await Matches.findAll({ attributes: { include: ['homeTeamGoals',
      'awayTeamGoals'],
    exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'] } });

    const totalVictories = quantifyGoals.reduce((contador, mache:IMatche) => {
      if (mache.homeTeamGoals > mache.awayTeamGoals) {
        return contador + 1;
      }

      return totalVictories;
    }, 0);
  };
}
