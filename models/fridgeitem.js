'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FridgeItem extends Model {
    static associate(models) {}
  }
  FridgeItem.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' }
      },
      foodItemId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'foodItems', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'FridgeItem',
      tableName: 'fridgeItems'
    }
  )
  return FridgeItem
}
