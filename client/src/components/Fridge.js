import React from 'react'

const Fridge = (props) => {
  console.log(props)
  return (
    <div>
      {props.fridge.map((fridgeItem) => (
        <div>
          <p>{fridgeItem.name}</p>
          {/* <img src={fridgeItem.image} /> */}
          {/* <button onClick={() => props.removeIngredient()}>-</button> */}
        </div>
      ))}
    </div>
  )
}

export default Fridge
