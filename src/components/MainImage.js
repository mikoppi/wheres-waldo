import React from 'react'
import image from '../images/ps1.jpg'
import './styles/MainImage.css'


const MainImage = () => {
  return (
    <div className='main-image'>
        <img className='ps1' alt='gameimage' src={image}></img>
    </div>
  )
}

export default MainImage