import Usuario from '../models/Usuario';

class UsuarioController {
	// Store/Create -> Cria o usuário na tabela
	async create(req, res) {
		try {
			const novoUsuario = await Usuario.create(req.body);

			return res.json(novoUsuario);
		} catch (e) {
			// console.log(e);
			return res.status(400).json({
				erros: e.errors.map((err) => err.message), // pega todos os erros e joga no objeto
			});
		}
	}

	// Index -> Exibe todos os usuários
	async index(req, res) {
		try {
			const usuarios = await Usuario.findAll();

			return res.json(usuarios);
		} catch (e) {
			console.log(e);
			return res.status(500).json({ msg: 'Erro interno.' });
		}
	}

	// Show -> Exibe usuário por ID
	async show(req, res) {
		try {
			const usuario = await Usuario.findByPk(req.params.id);

			return res.json(usuario);
		} catch (e) {
			console.log(e);
			return res.status(500).json({ msg: 'Erro interno.' });
		}
	}

	// Update -> Atualiza usuário por ID
	async update(req, res) {
		try {
			const { id } = req.params;

			if (!id) {
				return res.status(400).json({
					erros: ['Você precisa informar o ID do usuário.'],
				});
			}

			const usuario = await Usuario.findByPk(id);

			if (!usuario) {
				return res.status(400).json({
					erros: ['Usuário não existe.'],
				});
			}

			const usuarioAtualizado = await usuario.update(req.body);

			return res.json(usuarioAtualizado);
		} catch (e) {
			// console.log(e);
			return res.status(400).json({
				erros: e.errors.map((err) => err.message),
			});
		}
	}

	// Delete => Deleta usuário por ID
	async delete(req, res) {
		try {
			const { id } = req.params;

			if (!id) {
				return res.status(400).json({
					erros: ['Você precisa informar o ID do usuário.'],
				});
			}

			const usuario = await Usuario.findByPk(id);

			if (!usuario) {
				return res.status(400).json({
					erros: ['Usuário não existe.'],
				});
			}

			await usuario.destroy();

			return res.status(204).json();
		} catch (e) {
			// console.log(e);
			return res.status(400).json({
				erros: e.errors.map((err) => err.message),
			});
		}
	}
}

// exportando o objeto já instanciado
export default new UsuarioController();
