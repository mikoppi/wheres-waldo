import React from 'react'
import MainImage from './components/MainImage'
import NavBar from './components/NavBar'
import './components/styles/main.css';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <MainImage/>
      
    </div>
  )
}

export default App