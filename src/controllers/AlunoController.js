import Aluno from '../models/Aluno';

class AlunoController {
	async create(req, res) {
		return res.json('OK');
	}
}

export default new AlunoController();
