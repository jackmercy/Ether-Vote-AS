import express from 'express';
import userController from '../controllers/user.controller';

var router = express.Router();

router.route('/login')
    .post(userController.postLogin);

router.route('/register')
    .post(userController.postRegister);

export default router;