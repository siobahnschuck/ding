'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('foodItems', 'image', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('foodItems', 'image', {
      type: Sequelize.STRING,
      allowNull: false
    })
  }
}
