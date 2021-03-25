import React from 'react'

const Fridge = (props) => {
  console.log(props)

  const removeIngredient = () => {
    props.dispatch({
      type: 'remove_fridge',
      payload: props.ingredient
    })
  }

  return (
    <div>
      {props.fridge.map((fridgeItem) => (
        <div>
          <p>{fridgeItem.name}</p>
          <img src={fridgeItem.image} />
          <button onClick={() => removeIngredient(props.ingredient)}>-</button>
        </div>
      ))}
    </div>
  )
}

export default Fridge
