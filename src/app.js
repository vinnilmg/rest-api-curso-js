import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

import tokenRoutes from './routes/tokenRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

import './database/connection';

dotenv.config();

// Configuração de IPs para o CORS
const whiteList = ['http://localhost:3000', 'https://www.google.com'];

// Configuração de permissão CORS
const corsOptions = {
	origin(origin, callback) {
		// console.log(origin);
		if (whiteList.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Now allowed by CORS.'));
		}
	},
};

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(cors(corsOptions));
		this.app.use(helmet());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(express.static(resolve(__dirname, '..', 'uploads'))); // arquivos estaticos
	}

	routes() {
		this.app.use('/tokens/', tokenRoutes);
		this.app.use('/usuarios/', usuarioRoutes);
		this.app.use('/alunos/', alunoRoutes);
		this.app.use('/fotos/', fotoRoutes);
	}
}

// exportando apenas o this.app
export default new App().app;
