class HomeController {
	index(req, res) {
		res.json({
			ok: true,
		});
	}
}

// exportando o objeto já instanciado
export default new HomeController();
