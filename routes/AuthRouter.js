const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post(
  '/login',
  middleware.StripHeaders,
  middleware.VerifyToken,
  controller.Login
)

router.post('/register', controller.Register)

module.exports = router
