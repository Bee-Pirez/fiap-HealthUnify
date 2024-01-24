'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    static associate(models) {

    }
  }
  Pacientes.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pacientes',
    defaultScope: {
      attributes: {
        excluse: ['senha']
      }
    }
  });
  return Pacientes;
};