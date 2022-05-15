require('dotenv').config();

module.exports = {
	dialect: 'mariadb',
	host: process.env.HOST,
	port: process.env.PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		'createdAt': 'created_at',
		'updatedAt': 'updated_at',
	},
	dialectOptions: {
		timezone: 'America/Sao_Paulo',
	},
	timezone: 'America/Sao_Paulo',
};
