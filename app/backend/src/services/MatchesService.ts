import { Identifier } from 'sequelize/types';
import Matches from '../database/models/Matches';
import Team from '../database/models/Teams';
import IMatche from '../interfaces/Matches';
import CustomError from '../interfaces/custom.error';

export default class MatcheService {
  getAllMatchesService = async () => {
    const matches = await Matches.findAll(
      { include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ] },
    );
    return matches;
  };

  createMatcheService = async (matche: IMatche) => {
    // const matcheHome = await Matches.findOne( {where:
    //   {matche. }});
    //   const matcheAway = await Matches.findOne({where:
    //   {id: 'awayTeam'}});

    // if(matcheHome === matcheAway){
    //   throw new CustomError(401, 'It is not possible to create a match with two equal teams!');
    // }

    if (matche.homeTeam === matche.awayTeam) {
      throw new CustomError(401, 'It is not possible to create a match with two equal teams');
    }

    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals } = matche;

    const matches = await Matches.create(

      { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress: true },
    );
    // console.log(matches, 'matches')

    return matches;
  };

  updateStatusMatche = async (id: Identifier | undefined) => {
    const matcheId = await Matches.findByPk(id);

    if (!matcheId) {
      throw new CustomError(404, 'Matche does not exist');
    }

    await Matches.update({ inProgress: false }, { where: { id } });

    return { message: 'Finished' };
  };
}
export { MatcheService };
