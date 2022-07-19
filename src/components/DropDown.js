import React from 'react'
import DropDownItem from './DropDownItem';
import Dropdown from './styles/Dropdown.module.css'

const DropDown = ({ characters, show, clickLocation }) => {
    return (
        <div className={show ? Dropdown.absolute : Dropdown.hidden} style={clickLocation}>
            <div className={Dropdown.container}>
                <div className={Dropdown.box}></div>
                <div className={Dropdown.characters}>
                    {characters.map(char => 
                        <DropDownItem  key={char.name} title={char.name} image={char.picture}/>)}

                </div>
            </div>
        </div>
    
    );
  };

export default DropDown