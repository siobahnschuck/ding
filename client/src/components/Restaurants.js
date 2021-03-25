import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ReactMap, { Marker } from 'react-map-gl'
import Map from './Map'
import axios from 'axios'
import '../css/Setting.css'
import { APY_RESTAURANT_KEY, BASE_URL3 } from '../globals'

const Restaurants = ({ state, dispatch }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [viewport, setViewport] = useState({
    width: '80vw',
    height: '70vh',
    latitude: 30,
    longitude: -60
  })
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2>Enter your zipcode</h2>
          <input
            value={state.zipcode}
            onChange={(e) =>
              dispatch({ type: 'search_zipcode', payload: e.target.value })
            }
          ></input>
          <button onClick={() => getRestaurants()}>search</button>
          {state.restaurants.map((restaurant) => (
            <div>
              <p>{restaurant.restaurant_name}</p>
            </div>
          ))}
          {/* <Map restaurants={state.restaurants} /> */}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Restaurants
