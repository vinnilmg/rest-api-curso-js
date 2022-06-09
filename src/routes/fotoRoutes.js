import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);
const router = new Router();

// receber apenas 1 arquivo (deve vir como 'foto' na requisicao)
router.post('/upload', upload.single('foto'), fotoController.store);

export default router;
