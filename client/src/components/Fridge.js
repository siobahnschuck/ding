import React from 'react'

const Fridge = (props) => {
  const removeIngredient = (id) => {
    return props.dispatch({ type: 'remove_fridge', payload: id })
  }

  return (
    <div className="fridge-inside">
      {props.fridge.map((fridgeItem) => (
        <div>
          {/* <p>{fridgeItem.name}</p> */}
          <img className="foodIcon" src={fridgeItem.image} />
          <button onClick={() => removeIngredient(fridgeItem.id)}>-</button>
        </div>
      ))}
    </div>
  )
}

export default Fridge
