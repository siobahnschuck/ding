const { FoodItem, Recipe, Sequelize } = require('../models')
const { Op } = require('sequelize')

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
    //map thru the payload and findALL for each query
    console.log('params here', req.params)
    console.log('query here', req.query)
    let names = req.query.name
    delete req.query.name
    const foods = await FoodItem.findAll({
      include: [
        {
          model: Recipe,
          as: 'ingredient',
          through: { attributes: [] },
          where: {
            ...req.query
          }
        }
      ],
      where: {
        name:
          typeof names === 'string'
            ? names
            : {
                [Op.in]: names
              }
      }
    })
    res.send(foods)
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
