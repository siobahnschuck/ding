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
    }
  }
  FoodItem.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      category: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'FoodItem',
      tableName: 'foodItems'
    }
  )
  return FoodItem
}
