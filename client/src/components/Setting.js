import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import UseOutsideClick from './UseOutsideClick'

import '../css/Setting.css'

const Setting = () => {
  const [selected, setSelected] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const toggleSelect = () => setSelected(!selected)
  // const ref = useRef()
  // UseOutsideClick(ref, () => {
  //   alert('You clicked outside')
  // })
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        SETTING
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="setting"
        // ref={ref}
      >
        <Modal.Body>
          <h1>Preferrence</h1>
          <p> cuisine:</p>
          <button type="submit" onClick={() => toggleSelect()}>
            Italian
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            American
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Chinese
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            French
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Mediterranean
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Mexican
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Thai
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Vietnamese
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Indian
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Soul Food
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Carribean
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Spanish
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Moroccan
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Brazilian
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            African
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Cuban
          </button>
          <p>special request:</p>
          <button type="submit" onClick={() => toggleSelect()}>
            Vegan
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            Dairy Free
          </button>
          <button type="submit" onClick={() => toggleSelect()}>
            No Nuts
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => handleClose()}>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Setting
