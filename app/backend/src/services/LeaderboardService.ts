import Matches from '../database/models/Matches';
import { goalsFavor, goalsOwn, totalPoints, totalGames,
  totalVictores, totalDraws, totalLosses } from '../utils/functions';
import Teams from '../database/models/Teams';

export default class LeatherBoardService {
  public homeTeamRankingService = async () => {
    const matches = await Teams.findAll(
      { include: [
        { model: Matches, as: 'matchesHome', where: { inProgress: false } },
      ] },
    );
    const allTeams = this.leaderBoardMap(matches);
    return allTeams.sort((a:any, b:any) => b.totalPoints - a.totalPoints
     || b.totalVictories - a.totalVictories
     || b.goalsBalance - a.goalsBalance
     || b.goalsFavor - a.goalsFavor
     || b.goalsOwn - a.goalsOwn);
  };

  leaderBoardMap = (matches:any) => matches.map((team:any) => {
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
      goalsBalance: goalsFavor(team.matchesHome) - goalsOwn(team.matchesHome),
      efficiency: Number(((((totalPointsFunc) / (totalPointsGames * 3)) * 100)).toFixed(2)),
    };
  });
}
