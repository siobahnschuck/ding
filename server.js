const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const FoodItemRouter = require('./routes/FoodItemRouter')
const RecipeRouter = require('./routes/RecipeRouter')
const IngredientRouter = require('./routes/IngredientRouter')
const app = express()
const PORT = process.env.PORT || 3001
const path = require('path')

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
app.use('/food', FoodItemRouter)
app.use('/recipe', RecipeRouter)
app.use('/ingredients', IngredientRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`App Listening On Port: ${PORT}`))
