import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();

router.get('/', usuarioController.index);
router.post('/', usuarioController.create);
router.get('/:id', usuarioController.show);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;
