const router = require('express').Router()
const controller = require('../controllers/RecipeController')
const middleware = require('../middleware')

router.get('/', controller.GetRecipe)
router.get('/popular', controller.GetRecipeByLike)
router.get('/ingredient/:query', controller.GetRecipeByIngredient)
router.get('/myRecipes/:user_id', controller.GetUserRecipesIngredients)
router.get('/cuisine/:type', controller.GetRecipeByCuisineType)
router.put('/like/:recipe_id', controller.LikeRecipe)
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
