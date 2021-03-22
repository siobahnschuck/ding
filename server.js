const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
// const AppRouter = require('./routes')
const app = express()
const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())

// app.use('/auth', AppRouter)
// app.use('/api', AppRouter)

app.listen(PORT, () => console.log(`App Listening On Port: ${PORT}`))
