import axios from 'axios'
export const API_KEY = process.env.REACT_APP_API_KEY
export const BASE_URL2 = 'https://api.spoonacular.com/recipes/complexSearch?'

export const BASE_URL = 'http://localhost:3001'
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
