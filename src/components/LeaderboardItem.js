import React from 'react'
import './styles/LeaderboardItem.css'
import humanReadableTime from '../utils/humanReadableTime'

const LeaderboardItem = ({name, time}) => {
  return (
    <div className='leaderboard-item'>
        <p id='name'>{name}</p>
        <p id='time'>{humanReadableTime(time)}</p>
    </div>
  )
}

export default LeaderboardItem