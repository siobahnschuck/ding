const { Ingredient, Recipe, FoodItem, User } = require('../models')

const CreateIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.create({ ...req.body })
    res.send(ingredient)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateIngredient
}
