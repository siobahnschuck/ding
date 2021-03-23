const { Recipe, Ingredient, FoodItem } = require('../models')
const { Op } = require('sequelize')
const { orderBy } = require('lodash')

const GetRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll()
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const GetRecipeByLike = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        likes: { [Op.gt]: 50 }
      },
      order: [['likes', 'DESC']],
      limit: 10
    })
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const GetRecipeByIngredient = async (req, res) => {
  try {
    const query = req.params.query
    const recipes = await Recipe.findAll({
      include: [
        {
          model: FoodItem,
          as: 'recipe_ingredient',
          through: { attributes: [] }
        }
      ],
      where: {
        name: query
      }
    })
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const LikeRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.increment(
      {
        likes: 1
      },
      { where: { id: req.params.recipe_id } }
    )
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const CreateRecipe = async (req, res) => {
  try {
    const addRecipe = await Recipe.create({ ...req.body })
    res.send(addRecipe)
  } catch (error) {
    throw error
  }
}

const UpdateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.update(
      { ...req.body },
      { where: { id: req.params.recipe_id }, returning: true }
    )
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const DeleteRecipe = async (req, res) => {
  try {
    await Recipe.destroy({ where: { id: req.params.recipe_id } })
    res.send({
      msg: 'Recipe Deleted',
      payload: req.params.recipe_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecipe,
  GetRecipeByLike,
  GetRecipeByIngredient,
  LikeRecipe,
  CreateRecipe,
  UpdateRecipe,
  DeleteRecipe
}
