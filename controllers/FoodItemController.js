const { FoodItem, Recipe, Sequelize } = require('../models')
const { Op } = require('sequelize')
const { receiveMessageOnPort } = require('node:worker_threads')

const GetFoodItem = async (req, res) => {
  try {
    const foods = await FoodItem.findAll()
    res.send(foods)
  } catch (error) {
    throw error
  }
}

const GetFoodById = async (req, res) => {
  try {
    const food = await FoodItem.findByPk(req.params.fooditem_id)
    res.send(food)
  } catch (error) {
    throw error
  }
}

const GetFoodItemByRecipe = async (req, res) => {
  try {
    const query = req.params.query
    const foods = await FoodItem.findAll({
      include: [{ model: Recipe, as: 'ingredient' }],
      where: {
        name: query
      }
    })
  } catch (error) {
    throw error
  }
}

const GetFoodByName = async (req, res) => {
  try {
    const query = req.params.search
    const food = await FoodItem.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`
        }
      }
    })
    res.send(food)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFoodItem,
  GetFoodById,
  GetFoodByName,
  GetFoodItemByRecipe
}
