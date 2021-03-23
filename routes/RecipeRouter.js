const router = require('express').Router()
const controller = require('../controllers/RecipeController')
const middleware = require('../middleware')

router.get('/', controller.GetRecipe)
router.get('/popular', controller.GetRecipeByLike)
router.put('/like/:comment_id', controller.LikeRecipe)
router.post(
  '/',
  // middleware.StripHeaders,
  // middleware.VerifyToken,
  controller.CreateRecipe
)
router.put(
  '/:recipe_id',
  // middleware.StripHeaders,
  // middleware.VerifyToken,
  controller.UpdateRecipe
)

router.delete(
  '/:recipe_id',
  // middleware.StripHeaders,
  // middleware.VerifyToken,
  controller.DeleteRecipe
)

module.exports = router
