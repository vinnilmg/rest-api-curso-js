import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Usuario from '../models/Usuario';
import Foto from '../models/Foto';

// models
const models = [Aluno, Usuario, Foto];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
