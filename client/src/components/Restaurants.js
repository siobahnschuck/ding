import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import '../css/Setting.css'
import { APY_RESTAURANT_KEY, BASE_URL3 } from '../globals'

const Restaurants = ({ state, dispatch }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getRestaurants = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL3}/zip_code/${state.zipcode}?key=${APY_RESTAURANT_KEY}`
      )
      dispatch({ type: 'get_restaurants', payload: res.data.data })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        ORDER ONLINE?
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        <Button className="closeBtn" onClick={handleClose}>
          X
        </Button>
        <Modal.Body>
          <h2>Find Restaurants Near You</h2>
          <input
            value={state.zipcode}
            placeholder="Enter your zipcode"
            onChange={(e) =>
              dispatch({ type: 'search_zipcode', payload: e.target.value })
            }
          ></input>
          <button id="searchBtn" onClick={() => getRestaurants()}>
            search
          </button>
          {state.restaurants.map((restaurant) => (
            <div>
              <h3>{restaurant.restaurant_name}</h3>
              <p>{restaurant.price_range}</p>
              <p>phone: {restaurant.restaurant_phone}</p>
              <p>Order Online: {restaurant.restaurant_website}</p>
              <p>
                Address: {restaurant.address.street},{restaurant.address.city},
                {restaurant.address.state} {restaurant.address.postal_code}
              </p>
              <p>{restaurant.hours}</p>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Restaurants
