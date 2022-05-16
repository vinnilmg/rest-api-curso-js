import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Usuario from '../models/Usuario';

// models
const models = [Aluno, Usuario];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
