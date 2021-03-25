import axios from 'axios'
export const API_KEY = process.env.REACT_APP_API_KEY
export const APY_RESTAURANT_KEY = process.env.REACT_APP_API_RESTAURANT_KEY
export const BASE_URL2 = 'https://api.spoonacular.com/recipes/complexSearch?'
export const BASE_URL3 = 'https://api.documenu.com/v2/restaurants'
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}`
    : 'http://localhost:3001'

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`

      return config
    }
  },
  (error) => Promise.reject(error)
)
