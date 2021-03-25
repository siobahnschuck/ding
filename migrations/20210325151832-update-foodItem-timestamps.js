'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn('foodItems', 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }),
      queryInterface.changeColumn('foodItems', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn('foodItems', 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false
      }),
      queryInterface.changeColumn('foodItems', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false
      })
    ])
  }
}
