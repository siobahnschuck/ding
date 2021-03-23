import React, { useReducer, useState } from 'react'
import '../css/Dashboard.css'
import AddFood from '../components/AddFood'
import Setting from '../components/Setting'
import CreateRecipe from '../components/CreateRecipe'
import MyRecipes from '../components/MyRecipes'
import Rank from '../components/Rank'
import Restaurants from '../components/Restaurants'
import { BASE_URL } from '../globals'
import axios from 'axios'

const iState = {
  query: '',
  ingredients: [],
  fridge: [],
  recipes: [],
  // newRecipe: {
  //   title: '',
  //   image: '',
  //   ingredients: '',
  //   instructions: ''
  // },
  // myRecipes: [],
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
      console.log('add_fridge is firing', action.payload)
      console.log('here is th states', state)
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
  console.log(state.ingredients)
  console.log(iState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setMyRecipes({ ...newRecipe, [name]: value })
  }
  const submitRecipe = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}`, newRecipe)
      setMyRecipes([...myRecipes, res.data])
    } catch (error) {
      console.log(error)
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
            <MyRecipes myRecipes={myRecipes} setMyRecipes={setMyRecipes} />
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
