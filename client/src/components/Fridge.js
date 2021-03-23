import React from 'react'

const Fridge = (props) => {
  console.log(props)
  return (
    <div>
      {props.fridge.map((fridgeItem) => (
        <div>
          <p>{fridgeItem.name}</p>
          <img src={fridgeItem.image} />
        </div>
      ))}
    </div>
  )
}

export default Fridge
