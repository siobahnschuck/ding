import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'
import '../css/popular.css'
import { BASE_URL } from '../globals'

const Rank = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [popular, setPopular] = useState([])
  const [like, setLike] = useState(0)

  const getPopular = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/recipe/popular`)
      setPopular(res.data)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getPopular()
  }, [like])

  const likeRecipe = async (id, like) => {
    try {
      const res = await axios.put(`${BASE_URL}/recipe/like/${id}`, like)
      setLike({ ...popular, like: popular.likes + 1 })
      return res.data
    } catch (error) {
      throw error
    }
  }

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
                <img src={item.image} />
                <p>{item.cuisineType}</p>
                <p>{item.instructions}</p>
                <h2>Likes: {item.likes}</h2>
                <button onClick={() => likeRecipe(item.id)}>LIKE</button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Rank
