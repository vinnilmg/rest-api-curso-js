import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);

router.post('/', usuarioController.create);
router.put('/', loginRequired, usuarioController.update); // usuario só pode atualizar seus dados
router.delete('/', loginRequired, usuarioController.delete); // usuário só pode deletar o seu

export default router;
