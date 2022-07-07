import express from 'express';

const router = express.Router();

 import Users from '../controllers/UsersController';

 const usersController = new Users();

router.post('/login', usersController.createUserController);




module.exports = router;
