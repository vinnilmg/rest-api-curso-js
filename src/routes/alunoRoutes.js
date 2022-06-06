import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';
import idAlunoRequired from '../middlewares/alunoMiddleware';

const router = new Router();

router.get('/', loginRequired, alunoController.index);
router.post('/', loginRequired, alunoController.create);
router.put('/:id', loginRequired, idAlunoRequired, alunoController.update);
router.get('/:id', loginRequired, idAlunoRequired, alunoController.show);
router.delete('/:id', loginRequired, idAlunoRequired, alunoController.delete);

export default router;
