'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {}
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
