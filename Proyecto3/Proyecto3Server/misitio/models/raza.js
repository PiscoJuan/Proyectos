'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class raza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  raza.init({
    race: DataTypes.STRING,
    tamano: DataTypes.STRING,
    velocidad: DataTypes.STRING,
    edad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'raza',
  });
  return raza;
};