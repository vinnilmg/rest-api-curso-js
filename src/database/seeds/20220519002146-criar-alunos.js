module.exports = {
  async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'alunos',
			[
				{
    			nome: 'Ronaldo',
					sobrenome: 'Ga',
          email: 'doido@email.com',
					idade: 25,
					peso: 540,
					altura: 2.1,
					created_at: new Date(),
					updated_at: new Date(),
     		},
				{
    			nome: 'Maria',
					sobrenome: 'Carica',
          email: 'mm@email.com',
					idade: 35,
					peso: 54.0,
					altura: 1.65,
					created_at: new Date(),
					updated_at: new Date(),
     		},
				{
    			nome: 'Bianca',
					sobrenome: 'Lima',
          email: 'bibi@email.com',
					idade: 15,
					peso: 45.70,
					altura: 1.47,
					created_at: new Date(),
					updated_at: new Date(),
     		},
				{
    			nome: 'Pedrin',
					sobrenome: 'Louco',
          email: 'doidolouco@email.com',
					idade: 18,
					peso: 75.60,
					altura: 1.77,
					created_at: new Date(),
					updated_at: new Date(),
     		},
			],
			{},
		);
  },

  down() {},
};
