import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Image } from 'semantic-ui-react'
import '../css/Recipe.css'

const GetAllRecipes = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        ALL RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="myRecipes">
        <Button className="closeBtn" onClick={handleClose}>
          X
        </Button>
        <Modal.Body>
          {props.allRecipes ? (
            <div className="all-recipes">
              {props.allRecipes.map((recipe) => (
                <div key={recipe.id}>
                  <Card className="cards">
                    <Image src={recipe.image} />
                    <Card.Content>
                      <Card.Header>{recipe.name}</Card.Header>
                      <Card.Description>
                        {recipe.duration}
                        {recipe.calories}
                        {recipe.ingredients}
                        <br></br>
                        {recipe.instructions}
                        <p>Vegan:{recipe.isVegan}</p>
                        <p>DairyFree:{recipe.isDairyFree}</p>
                        <p>Has Nuts: {recipe.hasNuts}</p>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Create A Recipe to add them to your collection!</h1>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default GetAllRecipes
