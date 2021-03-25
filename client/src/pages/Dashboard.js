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
import { NavLink } from 'react-router-dom'
import GetAllRecipes from '../components/GetAllRecipe'

const iState = {
  query: '',
  ingredients: [],
  fridge: [],
  recipes: [],
  restaurants: [],
  cuisines: '',
  vegan: false,
  dairyFree: false,
  vegetarian: false,
  recipeIngredients: [],
  pantry: [{ name: '', image: '' }],
  zipcode: ''
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
    case 'get_recipeIngredients':
      return { ...state, recipeIngredients: action.payload }
    case 'get_recipes':
      return { ...state, recipes: action.payload }
    case 'add_fridge':
      return { ...state, fridge: [...state.fridge, action.payload] }
    case 'remove_fridge':
      return { fridge: action.payload }
    case 'add_pantry':
      return { ...state, pantry: [...state.pantry, action.payload] }
    case 'create_recipe':
      return {
        ...state,
        newRecipe: action.payload
      }
    case 'my_recipes':
      return { ...state, myRecipes: action.payload }
    case 'select_cuisine':
      return { ...state, cuisines: action.payload }
    case 'select_vegan':
      return { ...state, vegan: action.payload }
    case 'select_dairyFree':
      return { ...state, dairyFree: action.payload }
    case 'select_vegetarian':
      return { ...state, vegetarian: action.payload }
    case 'submit_setting':
      return {
        ...state,
        cuisines: action.payload,
        vegan: action.payload,
        dairyFree: action.payload,
        vegetarian: action.payload
      }
    case 'get_restaurants':
      return {
        ...state,
        restaurants: action.payload
      }
    case 'search_zipcode':
      return {
        ...state,
        zipcode: action.payload
      }
    default:
      return state
  }
}

const Dashboard = (props) => {
  console.log(props.currentUser.id)
  const [recipeTitle, setRecipeTitle] = useState('')
  const [recipeId, setRecipeId] = useState('')
  // const [ingredients, setIngredients] = useState([])
  // const [isVegan, setVegan] = useState(false)
  // const [isDairyFree, setDairy] = useState(false)
  // const [hasNuts, setNuts] = useState(false)
  const [myRecipes, setMyRecipes] = useState([])
  const [allRecipe, setAllRecipe] = useState([])
  const [state, dispatch] = useReducer(reducer, iState)

  const handleChange = (e) => {
    setRecipeTitle(e.target.value)
  }
  // const handleVeganChange = () => {
  //   if (isVegan === true) {
  //     setVegan(false)
  //   } else {
  //     setVegan(true)
  //   }
  // }
  // const handleDairyChange = () => {
  //   if (isDairyFree === true) {
  //     setDairy(false)
  //   } else {
  //     setDairy(true)
  //   }
  // }
  // const handleNutsChange = () => {
  //   if (hasNuts === true) {
  //     setNuts(false)
  //   } else {
  //     setNuts(true)
  //   }
  // }

  useEffect(() => {
    getMyRecipes()
  }, [])

  useEffect(() => {
    getAllRecipes()
  }, [])

  const submitRecipe = async (e) => {
    e.preventDefault()
    const userId = props.currentUser.id
    console.log(props.currentUser.id)

    try {
      const res = await axios.post(`${BASE_URL}/recipe/`, {
        title: recipeTitle,
        userId
      })
      setRecipeId(res.data.id)
      setMyRecipes([...myRecipes])
    } catch (error) {
      console.log(error)
    }
  }
  // const removeIngredient = (id) => {
  //   let filtered = state.fridge.filter((ing) => ing.id !== id)
  //   return dispatch({ type: 'remove_fridge', payload: filtered })
  // }

  const getMyRecipes = async (e) => {
    const userId = props.currentUser.id
    try {
      const res = await axios.get(`${BASE_URL}/recipe/myRecipes/${userId}`)
      console.log(res)
      setMyRecipes(res.data)
    } catch (err) {
      throw err
    }
  }

  const getAllRecipes = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/recipe/ `)
      setAllRecipe(res.data)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="dashboard">
      <button className="logOutBtn" onClick={props.logOut}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          Logout
        </NavLink>
      </button>
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
              // removeIngredient={removeIngredient}
            />
          </div>
          <div className="block-1">
            <CreateRecipe
              dispatch={dispatch}
              state={state}
              recipeTitle={recipeTitle}
              submitRecipe={submitRecipe}
              handleChange={handleChange}
              // removeIngredient={removeIngredient}
              recipeId={recipeId}
            />
          </div>
        </section>
        <section>
          <div className="block-1">
            <Restaurants dispatch={dispatch} state={state} />
          </div>
          <div className="block-1">
            <GetAllRecipes
              getAllRecipes={getAllRecipes}
              allRecipes={allRecipe}
              setAllRecipe={setAllRecipe}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
