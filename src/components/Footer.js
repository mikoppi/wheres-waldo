import React from 'react'
import './styles/Footer.css'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'





const Footer = () => {
  

  return (
    <div className='footer'>
      <p>Made by mikoppi <GithubLink
        href="https://github.com/mikoppi"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
      </GithubLink> </p>     
      
         <p>Picture by: <a href='https://www.artstation.com/pierreroussel'>Pierre Roussel</a></p>
    </div>
  )
}

const GithubLink = styled.a`
  display: flex;
  align-items:center;
  justify-content:center;
  margin-left: 0.3rem;
  font-size: 1.3rem;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }`

export default Footer