import React, { useReducer, useState, useEffect } from 'react'
import '../css/Dashboard.css'
import AddFood from '../components/AddFood'
import Setting from '../components/Setting'
import CreateRecipe from '../components/CreateRecipe'
import MyRecipes from '../components/MyRecipes'
import Rank from '../components/Rank'
import Restaurants from '../components/Restaurants'
import { BASE_URL } from '../globals'
import axios from 'axios'
import MyRecipePage from './MyRecipePage'

const iState = {
  query: '',
  ingredients: [],
  fridge: [{ name: '', image: '' }],
  recipes: [],
  restaurants:[],
  cuisineType: '',
  specialRequest: '',
  zipcode:''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        query: action.payload
      }
    case 'get_ingredients':
      return { ...state, ingredients: action.payload }
    case 'get_recipes':
      return { ...state, recipes: action.payload }
    case 'add_fridge':
      // console.log('add_fridge is firing', action.payload)
      // console.log('here is th states', state)
      return { ...state, fridge: [...state.fridge, action.payload] }
    case 'create_recipe':
      return {
        ...state,
        newRecipe: action.payload
      }
    case 'my_recipes':
      return { ...state, myRecipes: action.payload }
    case 'select_cuisine':
      return { ...state, cuisineType: action.payload }
    case 'select_specialty':
      return { ...state, specialRequest: action.payload }
    case 'submit_setting':
      return {
        ...state,
        cuisineType: action.payload,
        specialRequest: action.payload
      }
    case'get_restaurants':
    return{
...state, restaurants:action.payload
    }
    case'search_zipcode':
    return{
...state, zipcode:action.payload
    }
    default:
      return state
  }
}

const Dashboard = () => {
  const [newRecipe, setNewRecipe] = useState({
    image: '',
    name: '',
    cuisineType: '',
    instructions: '',
    duration: 0,
    calories: 0
  })
  const [ingredients, setIngredients] = useState([])
  const [isVegan, setVegan] = useState(false)
  const [isDairyFree, setDairy] = useState(false)
  const [hasNuts, setNuts] = useState(false)

  const [myRecipes, setMyRecipes] = useState([])

  const [state, dispatch] = useReducer(reducer, iState)
  // console.log('here is the state ingredients', state.ingredients)
  // console.log(iState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe({ ...newRecipe, [name]: value })
  }
  const handleVeganChange = () => {
    if (isVegan === true) {
      setVegan(false)
    } else {
      setVegan(true)
    }
  }
  const handleDairyChange = () => {
    if (isDairyFree === true) {
      setDairy(false)
    } else {
      setDairy(true)
    }
  }
  const handleNutsChange = () => {
    if (hasNuts === true) {
      setNuts(false)
    } else {
      setNuts(true)
    }
  }

  useEffect(() => {
    // submitRecipe()
    getMyRecipes()
  }, [])

  const submitRecipe = async (e) => {
    e.preventDefault()
    // console.log(newRecipe)
    try {
      const res = await axios.post(`http://localhost:3001/recipe/`, {
        ...newRecipe,
        ingredients,
        isVegan,
        isDairyFree,
        hasNuts
      })
      console.log('submist recipe is firing')
      setMyRecipes([...myRecipes])
    } catch (error) {
      console.log(error)
    }
  }
  const removeIngredient = (id) => {
    let filtered = ingredients.filter((ing) => ing.id !== id)
    setIngredients(filtered)
  }
  // const addIngredient = (id) => {
  //   if (!ingredients.includes(id)) {
  //     setIngredients([...ingredients, id])
  //   }
  // }
  const getMyRecipes = async (e) => {
    // e.preventDefault()
    try {
      const res = await axios.get(`http://localhost:3001/recipe/`)
      // console.log(res.data)
      setMyRecipes(res.data)
    } catch (err) {
      throw err
    }
  }
  return (
    <div className="dashboard">
      <div id="dashboard">
        <section>
          <div className="block">
            <Setting dispatch={dispatch} state={state} />
          </div>
          <div className="block">
            <Rank />
          </div>
          <div className="block">
            <MyRecipes
              myRecipes={myRecipes}
              setMyRecipes={setMyRecipes}
              getMyRecipes={getMyRecipes}
            />
          </div>
        </section>
        <section>
          <div className="block-1">
            <AddFood
              dispatch={dispatch}
              state={state}
              removeIngredient={removeIngredient}
            />
          </div>
          <div className="block-1">
            <CreateRecipe
              dispatch={dispatch}
              state={state}
              newRecipe={newRecipe}
              submitRecipe={submitRecipe}
              handleChange={handleChange}
              removeIngredient={removeIngredient}
              handleVeganChange={handleVeganChange}
              handleDairyChange={handleDairyChange}
              handleNutsChange={handleNutsChange}
            />
          </div>
        </section>
        <section>
          <div className="block-1">
            <Restaurants     dispatch={dispatch}
              state={state}/>
          </div>
          <div className="block-1">hey</div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
