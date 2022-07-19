import React from 'react'
import './styles/DropDownItem.css'


const DropDownItem = ({image,title,handleCharacterPick}) => {
  return (
    <div className="character-dropdown-div" id={title} onClick={handleCharacterPick}>
        <img
          className="character-dropdown-img"
          src={image}
          alt={title}
          width='25%'
        />
        <div>{title}</div>
      </div>
  )
}




export default DropDownItem