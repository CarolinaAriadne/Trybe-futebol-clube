import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import IMatche from '../interfaces/Matches';


class MatcheController {
  public matches: MatchesService;

  constructor() {
    this.matches = new MatchesService();
  }

  public getAllMatchesController = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const matches = await this.matches.getAllMatchesService();
      res.status(200).json(matches);
    } catch (err) {
      next(err);
    }
  };
  public createMatcheController = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const matche: IMatche = req.body;
      const createdMatche = await this.matches.createMatcheService(matche);
      res.status(201).json({createdMatche});
    }catch(err){
      next(err);
    }
  }
}

export default MatcheController;
