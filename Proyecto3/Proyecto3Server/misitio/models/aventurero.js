'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aventurero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aventurero.init({
    class: DataTypes.STRING,
    race: DataTypes.STRING,
    nombre: DataTypes.STRING,
    fuerza: DataTypes.INTEGER,
    destreza: DataTypes.INTEGER,
    constitucion: DataTypes.INTEGER,
    inteligencia: DataTypes.INTEGER,
    sabiduria: DataTypes.INTEGER,
    carisma: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'aventurero',
  });
  return aventurero;
};