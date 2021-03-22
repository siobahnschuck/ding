'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' }
      },
      name: {
        type: Sequelize.STRING
      },
      cuisineType: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      isVegan: {
        type: Sequelize.BOOLEAN
      },
      isDairyFree: {
        type: Sequelize.BOOLEAN
      },
      hasNuts: {
        type: Sequelize.BOOLEAN
      },
      duration: {
        type: Sequelize.INTEGER
      },
      calories: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recipes')
  }
}
