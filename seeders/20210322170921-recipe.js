;('use strict')
const faker = require('faker')
const { User } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw: true })
    let recipes = [...Array(20)].map(() => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      title: faker.lorem.word(),
      cuisines: faker.lorem.word(),
      instructions: faker.lorem.sentence(),
      image: faker.image.image(),
      vegan: faker.random.boolean(),
      dairyFree: faker.random.boolean(),
      vegetarian: faker.random.boolean(),
      readyInMinutes: Math.floor(Math.random() * 180),
      calories: Math.floor(Math.random() * 800),
      likes: faker.random.number(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('recipes', recipes)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('recipes')
  }
}
