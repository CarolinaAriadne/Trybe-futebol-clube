import Matches from '../database/models/Matches';
import Team from '../database/models/Teams';

export default class MatcheService {
  getAllMatchesService = async () => {
    const matches = await Matches.findAll(
    {include: [
      {model: Team, as: 'teamHome', attributes:{exclude: ['id']}}, 
      {model: Team, as:'teamAway', attributes:{exclude: ['id']}},
  ]});
    return matches;
  };
}
export { MatcheService };


