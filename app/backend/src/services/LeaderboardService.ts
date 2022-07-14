// // import CustomError from '../interfaces/custom.error';
// import IMatche from '../interfaces/Matches';
// import ILeaderBoard from '../interfaces/Leaderboard';
import Teams from '../database/models/Teams';
// import ITeams from '../interfaces/Teams';
import Matches from '../database/models/Matches';

export default class LeatherBoardService {
  private teams: Teams[];
  private matches: Matches[];
  // totalPoints: number;
  // totalGames: number;
  // totalVictories: number; // caso a interface seja implementada
  // totalDraws: number;
  // totalLosses: number;
  // goalsFavor: number;
  // goalsOwn: number;
  // goalsBalance: number;
  // efficiency: string;
  public homeTeamRankingService = async () => {
    // const quantifyGoals = await Matches.findAll({ attributes: { include: ['homeTeamGoals',
    //   'awayTeamGoals'],
    // exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'] },
    // where: { inProgress: false } });
    this.teams = await Teams.findAll();
    this.matches = await Matches.findAll();

    // const totalVictories: any = quantifyGoals.reduce((accumulator: any, actualValue: any) => {
    //   if (actualValue.homeTeamGoals > actualValue.awayTeamGoals) {
    //     return accumulator + 3;
    //   }

    //   return totalVictories;
    // }, 0);

    // const totalVictories = () => {
    //   const totalVictoriesHome = quantifyGoals.reduce((previousValue, contador) => {
  };

  public totalVictories = (matche: Matches[]): number => matche.reduce((acc, actual) => {
    if (actual.homeTeamGoals > actual.awayTeamGoals) {
      return acc + 3;
    }
    return acc;
  }, 0);

  public totalDraws = (matche: Matches[]): number => matche.reduce((acc, actual) => {
    if (actual.homeTeamGoals === actual.awayTeamGoals) {
      return acc + 1;
    }
    return acc;
  }, 0);

  public totalPoints = (matche: Matches[]) => this.totalVictories(matche)
  * 3 + this.totalDraws(matche);
}
