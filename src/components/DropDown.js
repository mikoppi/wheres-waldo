import React from 'react'
import DropDownItem from './DropDownItem';
import Dropdown from './styles/Dropdown.module.css'

const DropDown = ({ characters, show, clickLocation, handleCharacterPick }) => {
    return (
        <div className={show ? Dropdown.absolute : Dropdown.hidden} style={clickLocation}>
            <div className={Dropdown.container}>
                <div className={Dropdown.box}></div>
                <div className={Dropdown.characters}>
                    {characters.map(char => 
                        <DropDownItem  key={char.name} title={char.name} image={char.picture} handleCharacterPick={handleCharacterPick}/>)}

                </div>
            </div>
        </div>
    
    );
  };

export default DropDown