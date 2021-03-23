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
import { async } from 'regenerator-runtime'

const iState = {
  query: '',
  ingredients: [],
  fridge: [{ name: '', image: '' }],
  recipes: [],
  cuisine: '',
  isVegan: false,
  isDiaryFree: false,
  nutAllergies: false
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
    default:
      return state
  }
}

const Dashboard = () => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    image: '',
    ingredients: '',
    instructions: ''
  })
  const [myRecipes, setMyRecipes] = useState([])

  const [state, dispatch] = useReducer(reducer, iState)
  // console.log('here is the state ingredients', state.ingredients)
  // console.log(iState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe({ ...newRecipe, [name]: value })
  }

  useEffect(() => {
    // submitRecipe()
    getMyRecipes()
  }, [])

  const submitRecipe = async (e) => {
    // e.preventDefault()
    // console.log(newRecipe)
    try {
      const res = await axios.post(`http://localhost:3001/recipe/`, newRecipe)
      // console.log(res)
      setMyRecipes([...myRecipes])
    } catch (error) {
      console.log(error)
    }
  }
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
            <AddFood dispatch={dispatch} state={state} />
          </div>
          <div className="block-1">
            <CreateRecipe
              dispatch={dispatch}
              state={state}
              newRecipe={newRecipe}
              submitRecipe={submitRecipe}
              handleChange={handleChange}
            />
          </div>
        </section>
        <section>
          <div className="block-1">
            <Restaurants />
          </div>
          <div className="block-1">hey</div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
