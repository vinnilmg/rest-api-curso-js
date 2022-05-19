import dotenv from 'dotenv';
import express from 'express';

import tokenRoutes from './src/routes/tokenRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import alunoRoutes from './src/routes/alunoRoutes';

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
		this.app.use('/tokens/', tokenRoutes);
		this.app.use('/usuarios/', usuarioRoutes);
		this.app.use('/alunos/', alunoRoutes);
	}
}

// exportando apenas o this.app
export default new App().app;
