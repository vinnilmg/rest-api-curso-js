import Aluno from '../models/Aluno';

class HomeController {
	async index(req, res) {
		const novoAluno = await Aluno.create({
			nome: 'Maria',
			sobrenome: 'Lima',
			email: 'maria@teste.com',
			idade: 52,
			peso: 250,
			altura: 1.8,
		});

		res.json({ novoAluno });
	}
}

// exportando o objeto já instanciado
export default new HomeController();
