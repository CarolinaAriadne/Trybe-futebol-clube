import { NextFunction, Request, Response } from 'express';
import LeatherBoardService from '../services/LeaderboardService';

class LeatherBoardController {
  public leatherboard: LeatherBoardService;

  constructor() {
    this.leatherboard = new LeatherBoardService();
  }

  public homeTeamRankingController = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teamsHomeFiltered = await this.leatherboard.homeTeamRankingService();
      res.status(200).json(teamsHomeFiltered);
    } catch (err) {
      next(err);
    }
  };
}

export default LeatherBoardController;
