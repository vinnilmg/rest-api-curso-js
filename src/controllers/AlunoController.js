import Aluno from '../models/Aluno';

class AlunoController {
	async index(req, res) {
		const alunos = await Aluno.findAll();

		return res.json(alunos);
	}

	async create(req, res) {
		return res.json('OK');
	}
}

export default new AlunoController();
