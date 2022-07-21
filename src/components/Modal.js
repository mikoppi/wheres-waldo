import React from 'react'

const Modal = ({time}) => {
  return (
    <div className='modal'>
        <label for="username" className="modal-username">
          Username
        </label>
        <input
          type="text"
          name="username"
          maxLength="30"
          className="modal-form-username-input"
        />
    </div>
  )
}

export default Modal