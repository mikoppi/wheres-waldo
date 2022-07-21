import React, { useEffect, useState } from 'react'
import MainImage from './components/MainImage'
import NavBar from './components/NavBar'
import './components/styles/main.css';
import PS1Data from './components/PS1Data';
import DropDown from './components/DropDown';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { db } from './firebase'




const App = () => {
  const [characters, setCharacters] = useState([]);
  const [coords, setCoords] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });
  const [showDropdown, setShowDropdown] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let PS1Characters = PS1Data.characters
    setCharacters(PS1Characters)
  },[]);

  useEffect(() => {
    characters.every((char) => char.found) ? setGameover(true) : setGameover(false)
  },[characters])

  useEffect(() => {
		if (gameStarted && !gameover) {
			setTimeout(() => {
				increaseTime();
			}, 1000);
		}
	});

  useEffect(() => {
    if(gameover) {
      console.log(time)
      console.log(db.collection('Games'))
      //addDataToFirebase(time)
      
    }
  },[gameover])


  const addDataToFirebase = async (seconds) => {
    
  }

  const increaseTime = () => {
		setTime(time + 1);
	};


  const getClickLocation = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord }; 
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
    setGameStarted(true)
    const coords = getClickLocation(e);
    setCoords(coords);
    formatClickLocation(coords);
  };

  const handleCharacterPick = (e) => {
    let charName = e.target.parentNode.id
    checkLocation(charName)
  }

  const checkLocation = async (name) => {
    const PS1DataCol = collection(db, 'PS1Data')
    const coordSnapshot = await getDocs(PS1DataCol);
    const coordList = coordSnapshot.docs.map(doc => doc.data())[0];
    let firebaseXcoord=0;
    let firebaseYcoord=0;
    console.log(coordList)
    console.log(coords, 'jee')
    switch(name) {
      case 'Spyro':
        firebaseXcoord=coordList.SpyroX;
        firebaseYcoord=coordList.SpyroY;
        break;
      case 'Crash':
        firebaseXcoord=coordList.CrashX;
        firebaseYcoord=coordList.CrashY;
        break;
      case 'PaRappa':
        firebaseXcoord=coordList.PaRappaX;
        firebaseYcoord=coordList.PaRappaY;
        break;
      default:
        return
    }
    if (isCoordWithinTwoDegrees(firebaseXcoord, coords.xCoord) && isCoordWithinTwoDegrees(firebaseYcoord, coords.yCoord)) {
      const updatedCharacters = characters.map((char) =>
        char.name === name ? { ...char, found: true } : char);
      setCharacters(updatedCharacters)
      
    }
    setShowDropdown(false)
  }


  const isCoordWithinTwoDegrees = (coord1, coord2) => {
    return (
      coord1 === coord2 ||
      coord1 + 1 === coord2 ||
      coord1 + 2 === coord2 ||
      coord1 - 1 === coord2 ||
      coord1 - 2 === coord2
    );
  };

  //console.log(characters)
  //console.log(gameover)



  return (
    <div className='app'>
      <NavBar time={time}/>
      <MainImage getClickLocation={imageClick}/>
      <DropDown  handleCharacterPick={handleCharacterPick} characters={characters} show={showDropdown} clickLocation={clickLocation}/>
      
    </div>
  )
}

export default App