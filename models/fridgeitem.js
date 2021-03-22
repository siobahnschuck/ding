'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FridgeItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FridgeItem.init(
    {
      userId: DataTypes.INTEGER,
      foodItemId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'FridgeItem',
      tableName: 'fridgeItems'
    }
  )
  return FridgeItem
}
