import React from 'react'

import './styles/NavBar.css'




const NavBar = () => {

 

  return (
    <nav className='nav'>
      <p className='site-name'>FindTheseCharacters</p>
      <ul>
        <li>
          <p>
              Character1
          </p>
        </li>
        <li>
          <p>
              Character2
          </p>
        </li>
        <li>
          <p>
              Character3
          </p>
        </li>
      </ul>
    </nav>
    
  )
}

export default NavBar