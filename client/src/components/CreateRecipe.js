import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import IngredientList from '../components/IngredientList'
import axios from 'axios'
import '../css/Setting.css'

const CreateRecipe = (props) => {
  console.log(props.state.query)
  const { state, dispatch, history } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const createRecipe=()={
  //   dispatch({type:'my_recipes',payload:state.newRecipe})
  // }
  // useEffect(() => {
  //   getMyIngredients()
  // }, [])
  const getMyIngredients = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/food/find/${props.state.query}`
        // `${BASE_URL}?query=${state.query}&apiKey=${API_KEY}&number=5`
      )
      console.log('hihihihi', res)
      props.dispatch({ type: 'get_ingredients', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  const ingredientList = props.state.ingredients.length
    ? props.state.ingredients.map((ingredient, index) => {
        return (
          <IngredientList
            key={'recipe' + index}
            // name={ingredient.name}
            // img={ingredient.image}
            ingredient={ingredient}
            history={history}
            dispatch={dispatch}
            state={state}
          />
        )
      })
    : null
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        CREATE RECIPE
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <form>
            <h2>Title:</h2>
            <input
              name="title"
              value={props.newRecipe.title}
              onChange={props.handleChange}
            />
            <h2>Image:</h2>
            <input
              name="image"
              value={props.newRecipe.image}
              onChange={props.handleChange}
            />
            <div id="addFood">
              Ingredients:
              <br></br>
              <input
                value={props.state.query}
                onChange={(e) =>
                  dispatch({ type: 'search', payload: e.target.value })
                }
              ></input>
              <button onClick={() => getMyIngredients()}>search</button>
              {ingredientList}
              <br></br>
              {/* <button onClick={() => getRecipe()}>Generate Recipes</button> */}
            </div>
            <h2>Instructions:</h2>
            <input
              name="instructions"
              value={props.newRecipe.instructions}
              onChange={props.handleChange}
            />
            <br></br>
            <br></br>
            <button type="submit" onSubmit={props.submitRecipe}>
              Create
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default CreateRecipe
