import React from 'react'
import DropDownItem from './DropDownItem';
import './styles/Dropdown.css'

const DropDown = ({ characters, show, clickLocation }) => {
    return (
        <div className={`${show ? "absolute" : "hidden"}`} style={clickLocation}>
            <div className='character-dropdown'>
                {characters.map(char => 
                    <DropDownItem  key={char.name} title={char.name} image={char.picture}/>)}

            </div>
        </div>
    
    );
  };

export default DropDown