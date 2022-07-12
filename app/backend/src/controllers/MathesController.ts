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
    // console.log('aqui')
    try {
      const matche: IMatche = req.body;
      // console.log('body', matche);
      const createdMatche = await this.matches.createMatcheService(matche);
      res.status(201).json(createdMatche);
    } catch (err) {
      next(err);
    }
  };

  public updateStatusMatche = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const matcheStatusUpdated = await this.matches.updateStatusMatche(id);
      res.status(200).json(matcheStatusUpdated);
    } catch (err) {
      next(err);
    }
  };

  public updateMatche = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const matcheUpdated = await this.matches.updateMatche(id, req.body);
      res.status(200).json(matcheUpdated);
    } catch (err) {
      next(err);
    }
  };
}

export default MatcheController;
