import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Image } from 'semantic-ui-react'
import '../css/Recipe.css'

const GetAllRecipes = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    props.getAllRecipes()
  }, [])

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
                    <br />
                    <Card.Header>{recipe.title}</Card.Header>
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
