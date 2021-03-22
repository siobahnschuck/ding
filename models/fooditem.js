'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FoodItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      image: { type: DataTypes.STRING, allowNull: false },
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
