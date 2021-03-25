'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FoodItem extends Model {
    static associate(models) {
      FoodItem.belongsToMany(models.User, {
        through: models.FridgeItem,
        as: 'food',
        foreignKey: 'foodItemId'
      })
      FoodItem.belongsToMany(models.Recipe, {
        through: models.Ingredient,
        as: 'ingredient',
        foreignKey: 'foodItemId'
      })
    }
  }
  FoodItem.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.TEXT, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'FoodItem',
      tableName: 'foodItems'
    }
  )
  return FoodItem
}
