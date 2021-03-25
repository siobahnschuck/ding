const router = require('express').Router()
const controller = require('../controllers/FoodItemController')

router.get('/', controller.GetFoodItem)
router.get('/recipe', controller.GetFoodItemByRecipe)
router.get('/find/:search', controller.GetFoodByName)
router.get('/look/:fooditem_id', controller.GetFoodById)

module.exports = router
