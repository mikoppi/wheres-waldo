import React from 'react'

const DropDownItem = ({image,title}) => {
  return (
    <div className="character-dropdown-div">
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