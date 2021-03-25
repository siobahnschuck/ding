import React from 'react'

const pantryList = (props) => {
  const AddToPantry = () => {
    props.dispatch({
      type: 'add_pantry',
      payload: props.ingredient
    })
  }
  return (
    <div className="ingredientList">
      <img alt="item" src={props.ingredient.image} />
      <span>
        <p>{props.ingredient ? props.ingredient.name : null}</p>
        <button onClick={() => AddToPantry(props.ingredient)}>+</button>
      </span>
    </div>
  )
}
export default pantryList
