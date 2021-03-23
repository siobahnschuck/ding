import React from 'react'

const IngredientList = (props) => {
  const AddToFridge = () => {
    console.log(props.name)
    props.dispatch({ type: 'add_fridge', payload: props.name })
    // props.state.fridge.push()
  }
  return (
    <div className="ingredientList">
      <img alt="item" src={props.img} />
      <span>
        <p>{props.name}</p>
        <button onClick={() => AddToFridge(props.name)}>+</button>
      </span>
    </div>
  )
}
export default IngredientList
