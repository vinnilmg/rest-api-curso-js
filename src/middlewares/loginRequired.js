import jwt from 'jsonwebtoken';

export default (req, res, next) => {
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
