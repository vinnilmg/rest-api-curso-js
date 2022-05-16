import Usuario from '../models/Usuario';

class UsuarioController {
	async create(req, res) {
		try {
			const novoUsuario = await Usuario.create(req.body);

			res.json(novoUsuario);
		} catch (e) {
			// console.log(e);
			res.status(400).json({
				erros: e.errors.map((err) => err.message), // pega todos os erros e joga no objeto
			});
		}
	}
}

// exportando o objeto já instanciado
export default new UsuarioController();
