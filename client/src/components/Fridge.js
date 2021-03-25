import React from 'react'

const Fridge = (props) => {
  console.log(props)

  const removeIngredient = (id) => {
    let filtered = props.fridge.filter((ing) => ing.id !== id)
    return props.dispatch({ type: 'remove_fridge', payload: filtered })
  }

  return (
    <div>
      {props.fridge.map((fridgeItem) => (
        <div>
          <p>{fridgeItem.name}</p>
          <img src={fridgeItem.image} />
          <button onClick={() => removeIngredient()}>-</button>
        </div>
      ))}
    </div>
  )
}

export default Fridge
