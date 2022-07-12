import { Router } from 'express';

import Matches from '../controllers/MathesController';
import Users from '../controllers/UsersController';
import Teams from '../controllers/TeamsController';

import { validEmail, validPassword } from '../middlewares/validateUser';
import verifyToken from '../middlewares/validateToken';
import UserController from '../controllers/UsersController';

const router = Router();

const usersController = new Users();
const teamsController = new Teams();
const matchesController = new Matches();

router.post('/login', validEmail, validPassword, usersController.createTokenController);
router.get('/login/validate', verifyToken, usersController.loginController);
router.get('/teams', teamsController.getAllTeamsController);
router.get('/teams/:id', teamsController.getTeamByIdController);
router.get('/matches', matchesController.getAllMatchesController);
router.post('/matches', verifyToken, matchesController.createMatcheController);

export default router;
