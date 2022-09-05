'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('razas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      race: {
        type: Sequelize.STRING
      },
      tamano: {
        type: Sequelize.STRING
      },
      velocidad: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('razas');
  }
};