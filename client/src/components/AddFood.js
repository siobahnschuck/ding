import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import IngredientList from '../components/IngredientList'
import { NavLink } from 'react-router-dom'
import { BASE_URL, API_KEY } from '../globals'
import axios from 'axios'
import '../css/AddFood.css'

const AddFood = ({ state, dispatch, history }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    getIngredients()
  }, [])
  const getIngredients = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}?query=${state.query}&apiKey=${API_KEY}&number=5`
      )
      console.log(res)
      dispatch({ type: 'get_ingredients', payload: res.data.results })
    } catch (err) {
      console.log(err)
    }
  }

  const ingredientList = state.ingredients.length
    ? state.ingredients.map((ingredient, index) => {
        return (
          <IngredientList
            key={'recipe' + index}
            name={ingredient.name}
            img={ingredient.image}
            history={history}
            dispatch={dispatch}
            state={state}
          />
        )
      })
    : null
  console.log(ingredientList)
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        GENERATE RECIPE
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className="body">
          <div>fridge</div>
          <div id="addFood">
            AddFood
            <br></br>
            <input
              value={state.query}
              onChange={(e) =>
                dispatch({ type: 'search', payload: e.target.value })
              }
            ></input>
            <button onClick={() => getIngredients()}>search</button>
            {ingredientList}
            <br></br>
            <button>Generate Recipes</button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <NavLink to="/dashboard">
            <Button variant="primary" onClick={handleClose}></Button>
          </NavLink>
        </Modal.Footer> */}
      </Modal>
    </div>
  )
}

export default AddFood
