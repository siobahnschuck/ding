const router = require('express').Router()
const controller = require('../controllers/IngredientController')

router.post('/', controller.CreateIngredient)

module.exports = router
