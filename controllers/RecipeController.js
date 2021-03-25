const { Recipe, Ingredient, FoodItem, User } = require('../models')
const { Op } = require('sequelize')
const axios = require('axios')
const { BASE_URL, API_KEY, BASE_URL_INFO } = require('../globals.js')

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

const GetRecipeById = async (req, res) => {
  let recipe = await Recipe.findByPk(req.params.id)
  res.send(recipe)
}

const GetAndCreateRecipes = async (req, res) => {
  try {
    let response = await axios.get(
      `${BASE_URL}cuisine=${req.query.cuisine}&includeIngredients=${req.query.includeIngredients}&diet=${req.query.diet}&apiKey=${API_KEY}`
    )
    let apiData = response.data.results
    let mapped = apiData.map((apiData) => {
      return {
        id: apiData.id,
        title: apiData.title,
        image: apiData.image
      }
    })
    await Recipe.bulkCreate(mapped, {
      ignoreDuplicates: true
    })
    res.send(mapped)
  } catch (error) {
    throw error
  }
}

const GetAndUpdateRecipe = async (req, res) => {
  try {
    let response = await axios.get(
      `${BASE_URL_INFO}/${req.params.id}/information?includeNutrition=false&apiKey=${API_KEY}`
    )
    const apiData = response.data
    let data = {
      title: apiData.title,
      cuisines: apiData.cuisines,
      instructions: apiData.instructions,
      image: apiData.image,
      vegan: apiData.vegan,
      dairyFree: apiData.dairyFree,
      vegetarian: apiData.vegetarian,
      readyInMinutes: apiData.readyInMinutes,
      calories: apiData.calories
    }
    await Recipe.update(
      { data },
      { where: { id: req.params.id, returning: true } }
    )
    res.send(data)
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
          model: FoodapiData,
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
        cuisines: type
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
  GetRecipeByCuisineType,
  LikeRecipe,
  CreateRecipe,
  UpdateRecipe,
  DeleteRecipe,
  GetUserRecipesIngredients,
  GetAndCreateRecipes,
  GetRecipeById,
  GetAndUpdateRecipe
}
