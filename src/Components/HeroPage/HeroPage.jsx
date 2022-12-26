import React from 'react'
import "./HeroPage.css"
import Line from "../../Assets/images/Line.png"
import EinpunkIllustration from "../../Assets/images/einpunk_illustration.png"

const HeroPage = () => {
  return (
    <div className='heropage-container'>
        <img src={Line} alt=""  className='line'/>
        <div className='heropage-details'>
            <div className='heropage-text'>
                <h2>The World's Fastest Growing Token Protocol</h2>
            </div>
            <div className='heropage-image'>
                <img src={EinpunkIllustration} alt="Einpunk Illustration" />
            </div>
        </div>
    </div>
  )
}

export default HeroPage