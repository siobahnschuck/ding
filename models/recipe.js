'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      name: DataTypes.STRING,
      cuisineType: DataTypes.STRING,
      instructions: DataTypes.STRING,
      image: DataTypes.STRING,
      isVegan: DataTypes.BOOLEAN,
      isDairyFree: DataTypes.BOOLEAN,
      hasNuts: DataTypes.BOOLEAN,
      duration: DataTypes.INTEGER,
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
