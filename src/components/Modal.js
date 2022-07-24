import React from 'react';
import './styles/Modal.css'
import LeaderboardItem from './LeaderboardItem';
import './styles/LeaderboardItem.css'
import humanReadableTime from '../utils/humanReadableTime';

const Modal = ({time,submitTime, updateUsername, leaderboard}) => {

    const sortObjects = (arr) => {
        return arr.sort((a,b) => a.time - b.time )
    }

  return (
    <div className='modal'>
        <h2>Your time: {humanReadableTime(time)}</h2>
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
            <input type='submit' value='Submit' id='submit'/>
        </form>
        <h1>Leaderboard:</h1>
        <div className='leaderboard-title'>
            <h2 id='name'>Name</h2>
            <h2 id='time'>Time</h2>
        </div>
        <div className='leaderboard-container'>
            {sortObjects(leaderboard).map((item) => 
                <LeaderboardItem key={item.name} name={item.name} time={item.time}/>)}
        </div>
    </div>
  )
}

export default Modal