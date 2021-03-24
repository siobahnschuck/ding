const router = require('express').Router()
const controller = require('../controllers/FoodItemController')
const middleware = require('../middleware')

router.get('/', controller.GetFoodItem)
// router.get('/recipe/:query', controller.GetFoodItemByRecipe)
router.get('/find/:search', controller.GetFoodByName)
router.get('/look/:fooditem_id', controller.GetFoodById)

module.exports = router
