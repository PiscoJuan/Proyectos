'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "clases",
      [
        {
          class:"Clerigo",
          vida: 8,
          habespecial: "Sume su sabiduria a todos los hechizos de curación.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class:"Luchador",
          vida: 10,
          habespecial: "Ataca dos veces.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class:"Pícaro",
          vida: 8,
          habespecial: "Los ataques por la espalda hacen el doble de dano.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          class:"Mago",
          vida: 6,
          habespecial: "Sume su inteligencia al dano de sus hechizos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clases', null, {});  
  }
};