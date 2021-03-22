'use strict'
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let foodItems = [...Array(20)].map(() => ({
      name: faker.lorem.word(),
      image: faker.image.image(),
      category: 'vegetable',
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('foodItems', foodItems)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('foodItems')
  }
}
