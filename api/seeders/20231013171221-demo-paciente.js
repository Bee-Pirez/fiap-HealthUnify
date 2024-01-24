'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pacientes', [
      {
        name: 'Bioca Pirez',
        cpf: '000.000.000-00',
        email: 'bioca@gmail.com',
        celular: '11000000000',
        nascimento: '2005-12-03',
        senha: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guga Saas',
        cpf: '000.000.000-12',
        email: 'gugaSaas@blablala.com',
        celular: '11900000000',
        nascimento: '2003-06-02',
        senha: '1234567845356',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Pacientes', null, {});
  }
};
