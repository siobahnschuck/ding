const { Recipe, Ingredient, FoodItem, User } = require('../models')
const { Op } = require('sequelize')

const GetRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll()
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const GetUserRecipesIngredients = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [
        {
          model: FoodItem,
          as: 'recipe_ingredient',
          through: { attributes: [] }
        }
      ],
      where: {
        userId: req.params.user_id
      }
    })
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

const GetRecipeByCuisineType = async (req, res) => {
  let type = req.params.type
  try {
    const recipes = await Recipe.findAll({
      where: {
        cuisineType: type
      }
    })
    res.send(recipes)
  } catch (error) {
    throw erroe
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
  console.log(req.params.recipe_id)
  console.log(req.body, 'REQ.BODY')
  try {
    const recipe = await Recipe.update(
      { ...req.body },
      { where: { id: req.params.recipe_id }, returning: true }
    )
    console.log(recipe, 'RECIPE')
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
  GetRecipeByCuisineType,
  LikeRecipe,
  CreateRecipe,
  UpdateRecipe,
  DeleteRecipe,
  GetUserRecipesIngredients
}
