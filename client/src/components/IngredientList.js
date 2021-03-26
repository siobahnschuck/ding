import React from 'react'

const IngredientList = (props) => {
  const AddToFridge = () => {
    props.dispatch({
      type: 'add_fridge',
      payload: props.ingredient
    })
  }
  return (
    <div className="ingredientList">
      <img
        onClick={() => AddToFridge(props.ingredient)}
        className="foodIcon"
        alt="item"
        src={props.ingredient.image}
      />
      <span>
        <p>{props.ingredient ? props.ingredient.name : null}</p>
        <button id="addBtn" onClick={() => AddToFridge(props.ingredient)}>
          +
        </button>
      </span>
    </div>
  )
}
export default IngredientList
