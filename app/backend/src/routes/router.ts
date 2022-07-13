import { Router } from 'express';

import Matches from '../controllers/MathesController';
import Users from '../controllers/UsersController';
import Teams from '../controllers/TeamsController';
import LeatherBoard from '../controllers/LeaderboardController';

import { validEmail, validPassword } from '../middlewares/validateUser';
import verifyToken from '../middlewares/validateToken';

const router = Router();

const usersController = new Users();
const teamsController = new Teams();
const matchesController = new Matches();
const leatherController = new LeatherBoard();

router.post('/login', validEmail, validPassword, usersController.createTokenController);
router.get('/login/validate', verifyToken, usersController.loginController);
router.get('/teams/:id', teamsController.getTeamByIdController);
router.get('/teams', teamsController.getAllTeamsController);
router.get('/matches', matchesController.getAllMatchesController);
router.post('/matches', verifyToken, matchesController.createMatcheController);
router.patch('/matches/:id/finish', verifyToken, matchesController.updateStatusMatche);
router.patch('/matches/:id', matchesController.updateMatche);
router.get('/leaderboard/home', leatherController.homeTeamRankingController);

export default router;
