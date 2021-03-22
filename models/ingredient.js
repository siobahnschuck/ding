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
      recipeId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'recipes', key: 'id' }
      },
      foodItemId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'foodItems', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'Ingredient',
      tableName: 'ingredients'
    }
  )
  return Ingredient
}
