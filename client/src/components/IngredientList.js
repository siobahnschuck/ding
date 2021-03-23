import React from 'react'

const IngredientList = (props) => {
  const AddToFridge = () => {
    console.log(props.name)
    props.dispatch({
      type: 'add_fridge',
      payload: props.ingredient
    })
    // props.state.fridge.push()
  }
  return (
    <div className="ingredientList">
      <img alt="item" src={props.ingredient.image} />
      <span>
        <p>{props.ingredient.name}</p>
        <button onClick={() => AddToFridge(props.ingredient)}>+</button>
      </span>
    </div>
  )
}
export default IngredientList
