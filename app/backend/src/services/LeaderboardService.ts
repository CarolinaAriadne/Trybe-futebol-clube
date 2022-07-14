// import CustomError from '../interfaces/custom.error';
import Teams from '../database/models/Teams';
// import ITeams from '../interfaces/Teams';
import Matches from '../database/models/Matches';

export default class LeatherBoardService {
  public homeTeamRankingService = async () => {
    const quantifyGoals = await Matches.findAll({ attributes: { include: ['homeTeamGoals',
      'awayTeamGoals'],
    exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'] } });

    const ola = quantifyGoals.reduce((object) => {
      if (object.homeTeamGoals > object.awayTeamGoals) {

      }

      return ola;
    }, 0);
  };
}
