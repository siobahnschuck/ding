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

  const likeRecipe = async (id) => {
    try {
      const res = await axios.put(`${BASE_URL}/recipe/like/${id}`)
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
        <div>
          <Button id="closeBtn" onClick={handleClose}>
            X
          </Button>
        </div>
        <Modal.Body>
          <div className="popular-page">
            {popular.map((item, idx) => (
              <div className="popular-item" key={idx}>
                <h2 className="recipe-title">{item.name}</h2>
                <img alt="recipe" src={item.image} />
                <p>{item.cuisineType}</p>
                <p>{item.instructions}</p>
                <h2>Likes: {item.likes}</h2>
                <button onClick={() => likeRecipe(item.id)} className="like">
                  <img
                    alt="heart"
                    src="https://img.icons8.com/ios-glyphs/50/000000/filled-like.png"
                  />
                </button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Rank
