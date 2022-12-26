import React from 'react'
import "./HeroPage.css"
import Line from "../../Assets/images/Line.png"

const HeroPage = () => {
  return (
    <div className='heropage-container'>
        <img src={Line} alt=""  className='line'/>
        <p>HeroPage</p>
    </div>
  )
}

export default HeroPage