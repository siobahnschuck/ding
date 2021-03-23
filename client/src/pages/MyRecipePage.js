import React from 'react'

const MyRecipePage = (props) => {
  console.log(props)
  return (
    <div>
      <form>
        <h2>Title:</h2>
        <input
          name="title"
          value={props.newRecipe.title}
          onChange={props.handleChange}
        />
        <h2>Image:</h2>
        <input
          name="image"
          value={props.newRecipe.image}
          onChange={props.handleChange}
        />
        <div id="addFood">
          Ingredients:
          <br></br>
          <input
            value={props.state.query}
            onChange={(e) =>
              props.dispatch({ type: 'search', payload: e.target.value })
            }
          ></input>
          <button onClick={() => props.getMyIngredients()}>search</button>
          {props.ingredientList}
          <br></br>
          {/* <button onClick={() => getRecipe()}>Generate Recipes</button> */}
        </div>
        <h2>Instructions:</h2>
        <input
          name="instructions"
          value={props.newRecipe.instructions}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        {/* <button type="submit" onSubmit={props.submitRecipe}> */}
        {/* Create
            </button> */}
      </form>
    </div>
  )
}

export default MyRecipePage
