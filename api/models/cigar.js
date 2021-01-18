'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cigar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cigar.belongsTo(models.User);
    }
  };
  Cigar.init({

  }, {
    sequelize,
    modelName: 'Cigar',
  });
  return Cigar;
};