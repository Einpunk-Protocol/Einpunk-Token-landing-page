import React from 'react'
import "./HeroPage.css"
import Line from "../../Assets/images/Line.png"
import EinpunkIllustration from "../../Assets/images/einpunk illustration.png"

const HeroPage = () => {
    let url = "https://t.me/+cBzvl0ZWRkxjYmMx"
  return (
    <div className='heropage-container'>
        <img src={Line} alt=""  className='line'/>
        <div className='heropage-details'>
            <div className='heropage-text'>
                <h2>The World's Fastest Growing <br/> Token Protocol</h2>
                <p>Einpunk Token is a unique deflationary token with a 1% slippage, total supply of 1000T, 100% ownership renounced and Liquidity pool locked forever.</p>
                <p>31% of Einpunk Tokens have been burnt so far.
                The goal of the project is to establish a NFT club (Einpunk Club), where users can hold, buy and sell unique NFTs on a p2p platform.
                </p>
                <a href={url}>Join our Community</a>
            </div>
            <div className='heropage-image'>
                <img src={EinpunkIllustration} alt="Einpunk Illustration" />
            </div>
        </div>
    </div>
  )
}

export default HeroPage