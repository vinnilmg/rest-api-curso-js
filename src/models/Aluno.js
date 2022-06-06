import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
	static init(sequelize) {
		super.init({
			nome: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 255],
						msg: 'Nome precisa ser preenchido.',
					},
				},
			},
			sobrenome: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 255],
						msg: 'Sobrenome precisa ser preenchido.',
					},
				},
			},
			email: {
				type: Sequelize.STRING,
				defaultValue: '',
				unique: {
					msg: 'Email já existe.',
				},
				validate: {
					isEmail: {
						msg: 'Email inválido.',
					},
				},
			},
			idade: {
				type: Sequelize.INTEGER,
				validate: {
					isInt: {
						msg: 'Idade precisa ser um número inteiro.',
					},
				},
			},
			peso: {
				type: Sequelize.FLOAT,
				validate: {
					isFloat: {
						msg: 'Peso deve ser um número.',
					},
				},
			},
			altura: {
				type: Sequelize.FLOAT,
				validate: {
					isFloat: {
						msg: 'Altura deve ser um número.',
					},
				},
			},
		}, {
			sequelize,
		});
		return this;
	}
}
