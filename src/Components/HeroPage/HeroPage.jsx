import React from 'react'
import "./HeroPage.css"
import Line from "../../Assets/images/Line.png"
import EinpunkIllustration from "../../Assets/images/einpunk illustration.png"

const HeroPage = () => {
  return (
    <div className='heropage-container'>
        <img src={Line} alt=""  className='line'/>
        <div className='heropage-details'>
            <div className='heropage-text'>
                <h2>The World's Fastest Growing <br/> Token Protocol</h2>
                <p>A highly-curated platform for creating, collecting and trading unique <br/>
NFTs. Trade with confidence on the world’s fastest and most secure <br/>
crypto exchange

</p>
            </div>
            <div className='heropage-image'>
                <img src={EinpunkIllustration} alt="Einpunk Illustration" />
            </div>
        </div>
    </div>
  )
}

export default HeroPage