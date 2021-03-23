'use strict'
const { FoodItem, Recipe } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recipe = await Recipe.findAll({ raw: true })
    const foods = await FoodItem.findAll({ raw: true })
    let ingredients = [...Array(20)].map(() => ({
      recipeId: recipe[Math.floor(Math.random() * recipe.length)].id,
      foodItemId: foods[Math.floor(Math.random() * foods.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('ingredients', ingredients)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ingredients')
  }
}
