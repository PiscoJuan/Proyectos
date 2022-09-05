'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "aventureros",
      [
        {
          class: 2,
          race: 3,
          nombre: "Iosif Everwinter",
          fuerza: 9,
          destreza: 16,
          constitucion: 14,
          inteligencia: 9,
          sabiduria: 16,
          carisma: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class: 2,
          race: 3,
          nombre: "Johnny BrazoD'Madera",
          fuerza: 16,
          destreza: 14,
          constitucion: 16,
          inteligencia: 12,
          sabiduria: 10,
          carisma: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class: 4,
          race: 1,
          nombre: "Pevecc",
          fuerza: 8,
          destreza: 14,
          constitucion: 14,
          inteligencia: 16,
          sabiduria: 10,
          carisma: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class: 3,
          race: 4,
          nombre: "Pisco Parker",
          fuerza: 8,
          destreza: 16,
          constitucion: 14,
          inteligencia: 12,
          sabiduria: 10,
          carisma: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class: 1,
          race: 3,
          nombre: "Sona",
          fuerza: 9,
          destreza: 9,
          constitucion: 16,
          inteligencia: 16,
          sabiduria: 16,
          carisma: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("aventureros", null, {});
  }
};