'use strict'
const bcrypt = require('bcrypt')
const { query } = require('express')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.insertOne('user', {
      firstName: 'Bob',
      lastName: 'Chef',
      username: 'bbchef',
      email: 'bobchef@yahoo.com',
      passwordDigest: await bcrypt.hash('1234', 1),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.deleteOne('user')
  }
}
