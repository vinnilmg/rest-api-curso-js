import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', alunoController.create);

export default router;
