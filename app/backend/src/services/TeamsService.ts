import { Identifier } from 'sequelize/types';
import CustomError from '../interfaces/custom.error';
// import ITeam from '../interfaces/Teams';
import Teams from '../database/models/Teams';

export default class TeamService {
  public getAllTeamsService = async () => {
    const teams = await Teams.findAll();
    return teams;
  };

  public getTeamByIdService = async (id: Identifier | undefined) => {
    const teamId = await Teams.findByPk(id);

    if (!teamId) {
      throw new CustomError(404, 'Team does not exist');
    }
    return teamId;
  };
}

export { TeamService };
