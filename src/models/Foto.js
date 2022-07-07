import Sequelize, { Model } from 'sequelize';

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
		}, {
			sequelize,
			tableName: 'fotos',
		});
		return this;
	}

	// foreign key com aluno
	static associate(models) {
		this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
	}
}
