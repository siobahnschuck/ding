import axios from 'axios'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'

const Rank = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getPopular = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        POPULAR RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  )
}
export default Rank
