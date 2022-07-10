import { Router } from 'express';

import Users from '../controllers/UsersController';

import { validEmail, validPassword } from '../middlewares/validateUser';
import verifyToken from '../middlewares/validateToken';

const router = Router();

const usersController = new Users();

router.post('/login', validEmail, validPassword, usersController.createTokenController);
router.get('/login/validate', verifyToken);

export default router;
