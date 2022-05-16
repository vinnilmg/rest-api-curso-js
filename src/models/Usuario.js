import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
	static init(sequelize) {
		super.init({
			nome: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 255],
						msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
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
			password_hash: {
				type: Sequelize.STRING,
				defaultValue: '',
			},
			password: {
				type: Sequelize.VIRTUAL, // nao vai existir na base de dados
				defaultValue: '',
				validate: {
					len: {
						args: [6, 50],
						msg: 'Campo senha deve ter entre 6 e 50 caracteres.',
					},
				},
			},
		}, {
			sequelize,
		});

		// executa ação antes do 'gancho' -> gancho para antes de salvar
		this.addHook('beforeSave', async (usuario) => {
			usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
		});

		return this;
	}
}
