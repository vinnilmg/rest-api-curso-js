const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
  	await queryInterface.bulkInsert(
			'usuarios',
			[
				{
					nome: 'John Doe',
					email: 'jo@email.com',
					password_hash: await bcryptjs.hash('123456', 8),
					created_at: new Date(),
					updated_at: new Date(),
    		},
				{
					nome: 'Juaninha',
					email: 'jj@email.com',
					password_hash: await bcryptjs.hash('teste123', 8),
					created_at: new Date(),
					updated_at: new Date(),
    		},
				{
					nome: 'Mario',
					email: 'bobo@email.com',
					password_hash: await bcryptjs.hash('alo1', 8),
					created_at: new Date(),
					updated_at: new Date(),
    		},
			],
			{},
		);
	},

  down() {},
};
