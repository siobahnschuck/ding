const router = require('express').Router()
const controller = require('../controllers/FoodItemController')

router.get('/', controller.GetFoodItem)
router.get('/:fooditem_id', controller.GetFoodById)
