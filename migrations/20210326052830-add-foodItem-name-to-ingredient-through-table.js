'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ingredients', 'name', {
     type: Sequelize.STRING,
      onDelete: 'CASCADE',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.deleteColumn('ingredients', 'foodItemName')
  }
}
