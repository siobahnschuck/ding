import React from 'react'

const IngredientList = (props) => {
  const AddToFridge = () => {
    console.log(props.name)
    props.dispatch({
      type: 'add_fridge',
      payload: props.ingredient
    })
  }
  return (
    <div className="ingredientList">
      {/* <img alt="item" src={props.ingredient.image} /> */}
      <span>
        <p>{props.ingredient ? props.ingredient.name : null}</p>
        <button onClick={() => AddToFridge(props.ingredient)}>+</button>
      </span>
    </div>
  )
}
export default IngredientList
