export default (req, res, next) => {
	const { id } = req.params;

	if (!id || id == 0) {
		return res.status(400).json({
			erros: ['Informar um ID válido para o aluno.'],
		});
	}

	return next();
};
