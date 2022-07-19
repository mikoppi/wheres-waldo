import React, { useEffect, useState } from 'react'
import MainImage from './components/MainImage'
import NavBar from './components/NavBar'
import './components/styles/main.css';
import PS1Data from './components/PS1Data';
import DropDown from './components/DropDown';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [coords, setCoords] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let PS1Characters = PS1Data.characters
    console.log(PS1Characters)
    setCharacters(PS1Characters)
    
  },[]);


  const getClickLocation = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord };

    console.log(coords)
    
    return coords;
  };

  const formatClickLocation = (coords) => {
    const { xCoord, yCoord } = coords;
    const updatedCoords = { left: xCoord + "%", top: yCoord + "%" };
    setClickLocation(updatedCoords);
    console.log(clickLocation)
    setShowDropdown(true);
  }

  const imageClick = (e) => {
    const coords = getClickLocation(e);
    setCoords(coords);
    formatClickLocation(coords);
  };

  const handleCharacterPick = (e) => {
    let charName = e.target.parentNode.id
    console.log(charName)
  }


  return (
    <div className='app'>
      <NavBar/>
      <MainImage getClickLocation={imageClick}/>
      <DropDown  handleCharacterPick={handleCharacterPick} characters={characters} show={showDropdown} clickLocation={clickLocation}/>
      
    </div>
  )
}

export default App