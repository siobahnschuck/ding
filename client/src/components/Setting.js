import React, { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import UseOutsideClick from './UseOutsideClick'

import '../css/Setting.css'
import { ModalActions } from 'semantic-ui-react'

const Setting = ({ state, dispatch, history }) => {
  // const [selected, setSelected] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const toggleSelect = () => setSelected(!selected)
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
        {' '}
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1>Preference</h1>
          <div className="cuisine-drop">
            <form
              onSubmit={(e) =>
                dispatch({
                  type: 'submit_setting',
                  payload: e.target.value
                })
              }
            >
              <p> Cuisine:</p>
              <select
                name="cuisine"
                onChange={(e) =>
                  dispatch({
                    type: 'select_cuisine',
                    payload: e.target.value
                  })
                }
              >
                <option value="none" selected>
                  None
                </option>
                <option value="Italian">Italian</option>
                <option value="American">American</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Indian">Indian</option>
                <option value="Soul Food">Soul Food</option>
                <option value="Spanish">Spanish</option>
                <option value="Moroccan">Moroccan</option>
                <option value="Brazilian">Brazilian</option>
                <option value="African">African</option>
                <option value="Cuban">Cuban</option>
              </select>
            </form>
          </div>
          <div>
            <p>Dietary Restrictions:</p>
            <form>
              <select
                name="dietaryRestrictions"
                multiple="multiple"
                onChange={(e) =>
                  dispatch({
                    type: 'select_specialty',
                    payload: e.target.value
                  })
                }
              >
                <option value="isVegan">Vegan</option>
                <option value="isDairyFree">Dairy Free</option>
                <option value="hasNuts">No Nuts</option>
              </select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" onClick={() => handleClose()}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Setting
