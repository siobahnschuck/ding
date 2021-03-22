import React from 'react'

const IngredientList = (props) => {
  const AddToFridge = (item) => {
    props.dispatch({ type: 'add_fridge' })
    props.state.fridge.push()
  }
  return (
    <div className="ingredientList">
      <img alt="item" src={props.img} />
      <span>
        <p>{props.name}</p>
        <button onClick={() => AddToFridge()}>+</button>
      </span>
    </div>
  )
}
export default IngredientList
