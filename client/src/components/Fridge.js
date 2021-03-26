import React from 'react'

const Fridge = (props) => {
  const removeIngredient = (id) => {
    return props.dispatch({ type: 'remove_fridge', payload: id })
  }

  return (
    <div className="fridge-inside">
      {props.fridge.map((fridgeItem) => (
        <div id="fridge-item">
          <img className="foodIcon" alt="food icon" src={fridgeItem.image} />
          <button
            id="deleteBtn"
            onClick={() => removeIngredient(fridgeItem.id)}
          >
            -
          </button>
        </div>
      ))}
    </div>
  )
}

export default Fridge
