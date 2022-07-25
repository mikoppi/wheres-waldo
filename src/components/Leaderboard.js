import React from 'react'
import LeaderboardItem from './LeaderboardItem'


const Leaderboard = ({leaderboard}) => {

    const sortObjects = (arr) => {
        return arr.sort((a,b) => a.time - b.time )
    }

  return (
    <div className='modal'>
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

export default Leaderboard