'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      class: {
        type: Sequelize.STRING
      },
      vida: {
        type: Sequelize.INTEGER
      },
      habespecial: {
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
    await queryInterface.dropTable('clases');
  }
};