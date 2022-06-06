import Aluno from '../models/Aluno';

class AlunoController {
	async index(req, res) {
		const alunos = await Aluno.findAll();
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

			const aluno = await Aluno.findByPk(id);

			if (!aluno) {
				return res.status(400).json({
					erros: ['Aluno não existe.'],
				});
			}

			const { nome, sobrenome, email, idade, peso, altura } = aluno;

			return res.json({ id, nome, sobrenome, email, idade, peso, altura });
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
