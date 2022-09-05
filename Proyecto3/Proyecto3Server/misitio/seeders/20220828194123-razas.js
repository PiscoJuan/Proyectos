'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "razas",
      [
        {
          race: "Elfo",
          tamano: "Estatura mediana",
          velocidad: 35,
          edad: "Hasta dos milenios.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          race: "Enano",
          tamano: "Estatura pequena",
          velocidad: 25,
          edad: "Hasta cinco siglos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          race: "Humano",
          tamano: "Estatura mediana",
          velocidad: 30,
          edad: "Menos de un siglo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          race: "Mediano",
          tamano: "Estatura pequena",
          velocidad: 25,
          edad: "Hasta tres siglos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('razas', null, {});  
  }
};