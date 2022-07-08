import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
	async index(req, res) {
		const alunos = await Aluno.findAll({
			attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'], // campos que estou pegando
			order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ordenacao
			include: { // relacionamento com model de Fotos
				model: Foto,
				attributes: ['id', 'filename'],
			},
		});
		return res.json(alunos);
	}

	async create(req, res) {
		try {
			const aluno = await Aluno.create(req.body);

			return res.json(aluno);
		} catch (e) {
			return res.status(400).json({
				erros: e.errors.map((err) => err.message),
			});
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params;

			const aluno = await Aluno.findByPk(id);

			if (!aluno) {
				return res.status(400).json({
					erros: ['Aluno não existe.'],
				});
			}

			const alunoAtualizado = await aluno.update(req.body);
			const {
					nome, sobrenome, email, idade, peso, altura, updated_at: atualizadoEm,
				} = alunoAtualizado;

			return res.json({ id, nome, sobrenome, email, idade, peso, altura, atualizadoEm });
		} catch (e) {
			return res.status(400).json({
				erros: e.errors.map((err) => err.message),
			});
		}
	}

	async show(req, res) {
		try {
			const { id } = req.params;

			const aluno = await Aluno.findByPk(id, {
				attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
				order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
				include: {
					model: Foto,
					attributes: ['filename'],
				},
			});

			if (!aluno) {
				return res.status(400).json({
					erros: ['Aluno não existe.'],
				});
			}

			return res.json(aluno);
		} catch (e) {
			return res.status(400).json({
				erros: e.errors.map((err) => err.message),
			});
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;

			const aluno = await Aluno.findByPk(id);

			if (!aluno) {
				return res.status(400).json({
					erros: ['Aluno não existe.'],
				});
			}

			await aluno.destroy();
			return res.status(204).json();
		} catch (e) {
			return res.status(400).json({
				erros: e.errors.map((err) => err.message),
			});
		}
	}
}

export default new AlunoController();
