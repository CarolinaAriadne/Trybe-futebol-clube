import { NextFunction, Request, Response } from 'express';
// import ITeam from '../interfaces/Teams';
import TeamsService from '../services/TeamsService';

class TeamController {
  public teams: TeamsService;

  constructor() {
    this.teams = new TeamsService();
  }

  public getAllTeamsController = async (_req: Request, res: Response, next: NextFunction) => {
      try{
        const teams = await this.teams.getAllTeamsService();
        res.status(200).json(teams);
      }catch(err){
          next(err);
      }
  };
}

export default TeamController;
