require('dotenv').config()

const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch?'
const BASE_URL_INFO = 'https://api.spoonacular.com/recipes'
const OPTION = process.env.OPTIONS.split(',')
const API_KEY = OPTION[Math.floor(Math.random() * OPTION.length)]
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
  BASE_URL,
  API_KEY,
  BASE_URL_INFO,
  SECRET_KEY
}
