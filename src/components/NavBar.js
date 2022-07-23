import React from 'react'
import './styles/NavBar.css'
import Crash from '../images/crash.png'
import Spyro from '../images/spyro.png'
import Parappa from '../images/parappa.png'




const NavBar = ({time, image}) => {

    function humanReadableTime (seconds) {
        let hoursFormat = (seconds/60)/60;
        let minutesFormat = (hoursFormat-Math.floor(hoursFormat))*60
        let secondsFormat = Math.floor((minutesFormat-Math.floor(minutesFormat))*60)
        let array = [hoursFormat, minutesFormat, secondsFormat];
        let zerosAdded = array.map((num) => {
          if (num < 10) {
            return '0'+String(Math.floor(num))
          }
          return String(Math.floor(num))
        })
        return zerosAdded[0]+':'+zerosAdded[1]+':'+zerosAdded[2]
      }
 

  return (
    <nav className='nav'>
      <p className='site-name'>FindTheseCharacters</p>
      <ul>
        <li>
          <p>
              {humanReadableTime(time)}
          </p>
        </li>
        <li>
          <p>
            <img
                className="character-dropdown-img"
                src={Spyro}
                alt='pic'
                width='110px'
            />
          </p>
        </li>
        <li>
          <p>
            <img
                className="character-dropdown-img"
                src={Crash}
                alt='pic'
                width='80px'
                />
          </p>
        </li>
        <li>
          <p>
            <img
                className="character-dropdown-img"
                src={Parappa}
                alt='pic'
                width='80px'
                />
          </p>
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar