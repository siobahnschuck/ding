'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.User, { foreignKey: 'userId' })
      Recipe.belongsToMany(models.FoodItem, {
        through: models.Ingredient,
        as: 'recipe_ingredient',
        foreignKey: 'recipeId'
      })
    }
  }
  Recipe.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' }
      },
      title: DataTypes.STRING,
      cuisines: DataTypes.STRING,
      instructions: DataTypes.STRING,
      image: DataTypes.STRING,
      vegan: DataTypes.BOOLEAN,
      dairyFree: DataTypes.BOOLEAN,
      vegetarian: DataTypes.BOOLEAN,
      readyInMinutes: DataTypes.INTEGER,
      calories: DataTypes.INTEGER,
      likes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
