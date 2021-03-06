const { Ingredient, Recipe, FoodItem, User } = require('../models')

const CreateIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.create({ ...req.body })
    res.send(ingredient)
  } catch (error) {
    throw error
  }
}

const DeleteIngredient = async (req, res) => {
  try {
    let ingId = req.params.ingredient_id
    await Ingredient.destroy({
      where: {
        id: ingId
      }
    })
    res.send({
      msg: 'Ingredient Deleted',
      payload: ingId,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const GetIngredientsByRecipeId = async (req, res) => {
  try {
    let id = parseInt(req.params.recipe_id)
    let ingredient = await Ingredient.findAll({
      attributes: ['id', 'recipeId', 'foodItemId', 'name'],
      where: { recipeId: id }, 
    }, 
    )
    res.send(ingredient)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateIngredient,
  DeleteIngredient,
  GetIngredientsByRecipeId
}
