import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import '../css/Setting.css'

const Setting = ({ state, dispatch, history }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        SETTINGS
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="setting">
        <Button id="closeBtn" onClick={handleClose}>
          X
        </Button>
        <Modal.Body>
          <h1 className="setting-title">PREFERENCES</h1>
          <div className="cuisine-drop">
            <form
              className="setting-cuisine"
              onSubmit={(e) =>
                dispatch({
                  type: 'submit_setting',
                  payload: e.target.value
                })
              }
            >
              <select
                className="setting-dropdown"
                name="cuisine"
                onChange={(e) =>
                  dispatch({
                    type: 'select_cuisine',
                    payload: e.target.value
                  })
                }
              >
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

            <div className="setting-restrictions">
              <p className="setting-subtitle">Vegan</p>
              <input
                className="setting-check"
                type="checkbox"
                value="true"
                onClick={(e) => {
                  dispatch({
                    type: 'select_vegan',
                    payload: e.target.value
                  })
                }}
              />
              <p className="setting-subtitle">Dairy Free</p>
              <input
                className="setting-check"
                type="checkbox"
                value="true"
                onClick={(e) => {
                  dispatch({
                    type: 'select_dairyFree',
                    payload: e.target.value
                  })
                }}
              />
              <p className="setting-subtitle">Vegetarian</p>
              <input
                className="setting-check"
                type="checkbox"
                value="true"
                onClick={(e) => {
                  dispatch({
                    type: 'select_vegetarian',
                    payload: e.target.value
                  })
                }}
              />
            </div>
            <div className="setting-save-containter">
              <button
                id="generateBtn"
                type="submit"
                onClick={() => handleClose()}
              >
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Setting
