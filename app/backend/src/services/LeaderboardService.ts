// import CustomError from '../interfaces/custom.error';
import Teams from '../database/models/Teams';
// import ITeams from '../interfaces/Teams';
import Matches from '../database/models/Matches';

export default class LeatherBoardService {
  public homeTeamRankingService = async () => {
    const ola = await Matches;

    // const teams = await Teams.findAll({ attributes: { include: [['team_name', 'name']],
    //   exclude: ['id', 'teamName'] } });
    // return teams;

    // const insertKeyTotalPoints = teams.map((team) => {
    //   team.totalPoints = Matches.findAll()
    // });
  };
}
