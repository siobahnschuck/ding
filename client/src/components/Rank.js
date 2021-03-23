import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'
import '../css/popular.css'

const Rank = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/recipe/popular`)
      setPopular(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        POPULAR RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>TOP 10 RECIPES</p>
          <div className="popular-page">
            {popular.map((item) => (
              <div className="popular-item">
                <h2 className="recipe-title">{item.name}</h2>
                {/* <img src={item.image} /> */}
                <p>{item.cuisineType}</p>
                <p>{item.instructions}</p>
                <h2>Likes: {item.likes}</h2>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Rank
