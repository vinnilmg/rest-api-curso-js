import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
	static init(sequelize) {
		super.init({
			originalname: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'OriginalName precisa ser preenchido.',
					},
				},
			},
			filename: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'FileName precisa ser preenchido.',
					},
				},
			},
			url: {
				type: Sequelize.VIRTUAL,
				get() {
					return `${appConfig.url}/images/${this.getDataValue('filename')}`;
				},
			},
		}, {
			sequelize,
			tableName: 'fotos',
		});
		return this;
	}

	// foreign key com aluno -> "Foto pertence a um aluno"
	static associate(models) {
		this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
	}
}
