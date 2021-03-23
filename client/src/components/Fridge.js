import React from 'react'

const Fridge = (props) => {
  console.log(props)
  return (
    <div>
      {props.fridge.map((fridgeItem) => (
        <p>{fridgeItem}</p>
      ))}
    </div>
  )
}

export default Fridge
