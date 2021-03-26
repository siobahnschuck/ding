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
    let ingId = req.params.foodItem_id
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

module.exports = {
  CreateIngredient,
  DeleteIngredient
}
