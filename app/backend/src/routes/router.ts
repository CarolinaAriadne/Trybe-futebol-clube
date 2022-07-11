import { Router } from 'express';

import Users from '../controllers/UsersController';
import Teams from '../controllers/TeamsController';

import { validEmail, validPassword } from '../middlewares/validateUser';
import verifyToken from '../middlewares/validateToken';

const router = Router();

const usersController = new Users();
const teamsController = new Teams();

router.post('/login', validEmail, validPassword, usersController.createTokenController);
router.get('/login/validate', verifyToken);
router.get('/teams', teamsController.getAllTeamsController);
router.get('/teams/:id', teamsController.getTeamByIdController);

export default router;
