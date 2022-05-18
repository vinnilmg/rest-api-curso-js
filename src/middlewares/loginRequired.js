import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

export default async (req, res, next) => {
	// pega o token dos headers
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({
			erros: ['Login required.'],
		});
	}

	const [, token] = authorization.split(' ');

	try {
		// verifica se o token enviado é válido
		const dados = jwt.verify(token, process.env.TOKEN_SECRET);
		const { id, email } = dados;

		// checar na base se o email que está no token bate com o que está na base
		const usuario = await Usuario.findOne({
			where: { id, email },
		});

		if (!usuario) {
			return res.status(401).json({
				erros: ['Usuário inválido.'],
			});
		}

		// jogando dados na requisição
		req.usuarioId = id;
		req.usuarioEmail = email;

		return next(); // prossegue
	} catch (e) {
		return res.status(401).json({
			erros: ['Token expirado ou inválido.'],
		});
	}
};
