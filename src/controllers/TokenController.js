import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
	async store(req, res) {
		const { email = '', password = '' } = req.body;

		if (!email || !password) {
			return res.status(401).json({
				erros: ['Credenciais inválidas.'],
			});
		}

		// busca 1 usuário na base pelo email
		const usuario = await Usuario.findOne({ where: { email } });

		if (!usuario) {
			return res.status(401).json({
				erros: ['Usuário não localizado.'],
			});
		}

		// verifica se a senha enviada é igual a senha que está no banco
		if (!(await usuario.passwordIsValid(password))) {
			return res.status(401).json({
				erros: ['Senha do usuário inválida.'],
			});
		}

		const { id } = usuario;

		// criando token -> payload do que quero recuperar, token_secret e tempo de expiração
		const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
			expiresIn: process.env.TOKEN_EXPIRATION,
		});

		return res.json({ token, usuario: { id, nome: usuario.nome, email } });
	}
}

// exportando o objeto já instanciado
export default new TokenController();
