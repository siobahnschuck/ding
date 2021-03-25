require('dotenv').config()

const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch?'
const OPTION = process.env.OPTIONS.split(',')
const API_KEY = OPTION[Math.floor(Math.random() * OPTION.length)]

module.exports = {
  BASE_URL,
  API_KEY
}
