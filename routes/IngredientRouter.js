const router = require('express').Router()
const controller = require('../controllers/IngredientController')

router.post('/', controller.CreateIngredient)
router.delete('/:ingredient_id', controller.DeleteIngredient)

module.exports = router
