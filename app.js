import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import './src/database/connection';

dotenv.config();

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
	}

	routes() {
		this.app.use('/', homeRoutes);
		this.app.use('/usuarios', usuarioRoutes);
	}
}

// exportando apenas o this.app
export default new App().app;
