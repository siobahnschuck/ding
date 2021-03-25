import React from 'react'

const RecipeList = (props) => {
  return (
    <div className="recipeList">
      <img alt="item" src={props.recipe.image} />
      <span>
        <p>{props.recipe ? props.recipe.title : null}</p>
        {/* <button onClick={() => AddToFridge(props.ingredient)}>+</button> */}
        <p>missing ingredients: {props.recipe.missedIngredientCount}</p>
        <p>likes:{props.recipe.likes}</p>
      </span>
    </div>
  )
}
export default RecipeList
