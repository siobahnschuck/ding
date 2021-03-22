import React, { useReducer } from 'react'
import '../css/Dashboard.css'
import AddFood from '../components/AddFood'
import Setting from '../components/Setting'
import CreateRecipe from '../components/CreateRecipe'
import MyRecipes from '../components/MyRecipes'
import Rank from '../components/Rank'

const iState = {
  query: '',
  ingredients: [],
  fridge: [],
  recipes: [],
  newRecipe: '',
  myRecipes: [],
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
      return { ...state, fridge: action.payload }
    default:
      return state
  }
}
const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, iState)
  console.log(state.ingredients)
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
            <MyRecipes dispatch={dispatch} state={state} />
          </div>
        </section>
        <section>
          <div className="block-1">
            <AddFood dispatch={dispatch} state={state} />
          </div>
          <div className="block-1">
            <CreateRecipe dispatch={dispatch} state={state} />
          </div>
        </section>
        <section>
          <div className="block-1">Give me Restaurants</div>
          <div className="block-1">hey</div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
