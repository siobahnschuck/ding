const router = require('express').Router()
const controller = require('../controllers/IngredientController')

router.post('/', controller.CreateIngredient)
router.delete('/:ingredient_id', controller.DeleteIngredient)
router.get('/getAll/:recipe_id', controller.GetIngredientsByRecipeId)

module.exports = router
