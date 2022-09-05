'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aventureros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      class: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'clases',
          key:'id'
        }
      },
      race: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'razas',
          key:'id'
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      fuerza: {
        type: Sequelize.INTEGER
      },
      destreza: {
        type: Sequelize.INTEGER
      },
      constitucion: {
        type: Sequelize.INTEGER
      },
      inteligencia: {
        type: Sequelize.INTEGER
      },
      sabiduria: {
        type: Sequelize.INTEGER
      },
      carisma: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('aventureros');
  }
};