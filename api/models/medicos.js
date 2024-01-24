'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicos extends Model {
    static associate(models) {
      // define association here
    }
  }
  Medicos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    crm: DataTypes.STRING,
    especialidade: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medicos',
  });
  return Medicos;
};