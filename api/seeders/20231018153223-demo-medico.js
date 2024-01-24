'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Medicos', [
      {
        name: 'Alexandre Pereira',
        crm: '000000',
        especialidade: 'Nutricionista',
        email: 'alepereira@empresa.com',
        senha: '19845679',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Isabela Moraes',
        crm: '0000001',
        especialidade: 'Ginecologista',
        email: 'isamoraes@empresa.com',
        senha: '19845679435',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
