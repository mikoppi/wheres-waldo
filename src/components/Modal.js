import React from 'react';
import './styles/Modal.css'

const Modal = ({time,submitTime, updateUsername}) => {
  return (
    <div className='modal'>
        <h2>You finished in {time} seconds</h2>
        <h3>Submit your time to global leaderboard!</h3>
        <form className='form-container' onSubmit={submitTime}>
            <label htmlFor="username" className="modal-username">
            Username:
            </label>
            <input
            type="text"
            name="username"
            maxLength="30"
            className="modal-input"
            onChange={updateUsername}

            />
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default Modal