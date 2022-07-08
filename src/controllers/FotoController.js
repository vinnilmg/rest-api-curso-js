import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
	store(req, res) {
		return upload(req, res, async (err) => {
			if (err) {
				return res.status(400).json({
					erros: [err.code],
				});
			}

			const { originalname, filename } = req.file;
			const { aluno_id } = req.body;

			try {
				// criando foto no db
				const foto = await Foto.create({ originalname, filename, aluno_id });

				return res.json(foto);
			} catch (e) {
				return res.status(400).json({
					erros: ['Aluno não existe.'], // vai retornar sempre esse erro (pra remover teria que fazer a query e verificar se o aluno existe)
				});
			}
		});
	}
}

export default new FotoController();
