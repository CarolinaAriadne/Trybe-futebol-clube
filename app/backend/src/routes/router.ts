import { Router } from 'express';

import Users from '../controllers/UsersController';

import { validEmail, validPassword } from '../middlewares/validateUser';

const router = Router();

const usersController = new Users();

router.post('/login', validEmail, validPassword, usersController.createTokenController);

export default router;
