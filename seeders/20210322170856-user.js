'use strict'
const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        firstName: 'Bob',
        lastName: 'Chef',
        username: 'bbchef',
        email: 'bobchef@yahoo.com',
        passwordDigest: await bcrypt.hash('1234', 1),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
