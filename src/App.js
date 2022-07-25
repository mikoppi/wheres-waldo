import React, { useEffect, useState } from 'react'
import MainImage from './components/MainImage'
import NavBar from './components/NavBar'
import './components/styles/main.css';
import PS1Data from './components/PS1Data';
import DropDown from './components/DropDown';
import { collection, getDocs, setDoc, doc, addDoc, getFirestore, serverTimestamp } from 'firebase/firestore/lite';
import { db } from './firebase'
import Modal from './components/Modal';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';





const App = () => {
  const [characters, setCharacters] = useState([]);
  const [coords, setCoords] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });
  const [showDropdown, setShowDropdown] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [time, setTime] = useState(0);
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState([])
  const [leaderboardOpen, setLeaderboardOpen] = useState(false)

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
      if(time===0) return
      addDataToFirebase(time)
      const loadLeaderboard = async() => {
        setLeaderboard(await getLeaderboardData())
      }
      loadLeaderboard()
    }
  },[gameover])

  useEffect(() => {
    if(leaderboardOpen) {
      const loadLeaderboard = async() => {
        setLeaderboard(await getLeaderboardData())
      }
      loadLeaderboard()
    }
  },[leaderboardOpen])


  const addDataToFirebase = async (seconds) => {
    await addDoc(collection(getFirestore(), 'games'), {
      time: seconds+1,
      timestamp: serverTimestamp()
    });
    
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

  const updateUsername = (e) => {
    e.preventDefault()
    let name = e.target.value;
    setUsername(name)
  }


  const submitTime = async (e) => {
    e.preventDefault()
    await addDoc(collection(getFirestore(), 'leaderboard'), {
      name: username,
      time:time
      
    })
    setGameover(false)
    setGameStarted(false)
    resetState()
    
  }

  const getLeaderboardData = async () => {
    const LeaderboardCol = collection(db, 'leaderboard')
    const leaderboardSnapshot = await getDocs(LeaderboardCol);
    const leaderboardList = leaderboardSnapshot.docs.map(doc => doc.data());
    return leaderboardList
  }

  const resetState = () => {
    setCharacters(PS1Data.characters);
    setCoords(null);
    setClickLocation({ left: "0%", top: "0%" });
    setShowDropdown(false);
    setGameStarted(false);
    setGameover(false);
    setTime(0);
    setUsername('');
    setLeaderboard([])
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


  const openLeaderBoard = () => {
    setLeaderboardOpen((prevState) => !prevState)
  }

  //console.log(characters)
  //console.log(gameover)



  return (
    <div className='app'>
      <NavBar time={time} characters={characters} openLeaderboard={openLeaderBoard} leaderboardOpen={leaderboardOpen}/>
      <MainImage getClickLocation={imageClick}/>
      <DropDown  handleCharacterPick={handleCharacterPick} characters={characters} show={showDropdown} clickLocation={clickLocation}/>
      {gameover ? <Modal leaderboard={leaderboard} time={time} submitTime={submitTime} updateUsername={updateUsername}/> : null }
      <>{leaderboardOpen ? <Leaderboard  leaderboard={leaderboard}/> : null }</>
      <Footer/>
    </div>
  )
}

export default App