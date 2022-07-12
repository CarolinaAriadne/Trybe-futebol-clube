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

  let matche2 = {...matche, inProgress: true};

  const matches = await Matches.create(
    {
      matche2,
    });
    return matches;
  }
}
export { MatcheService };


