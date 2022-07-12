import Matches from '../database/models/Matches';
import Team from '../database/models/Teams';
import IMatche from '../interfaces/Matches';
import CustomError from '../interfaces/custom.error';

export default class MatcheService {
  getAllMatchesService = async () => {
    const matches = await Matches.findAll(
    {include: [
      {model: Team, as: 'teamHome', attributes:{exclude: ['id']}}, 
      {model: Team, as:'teamAway', attributes:{exclude: ['id']}},
  ]});
    return matches;
  };
 createMatcheService = async (matche: IMatche) => {

    const {homeTeam, homeTeamGoals, awayTeam, awayTeamGoals} = matche;

    const matches = await Matches.create(
    
    {homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress: true}
  );
  // console.log(matches, 'matches')

    return matches;
  }
}
export { MatcheService };


