'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init(
    {
      recipeId: DataTypes.INTEGER,
      foodItemId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Ingredient',
      tableName: 'ingredients'
    }
  )
  return Ingredient
}
