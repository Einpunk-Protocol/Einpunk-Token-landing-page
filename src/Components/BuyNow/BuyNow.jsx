import React from 'react'
import "./BuyNow.css"
import uniSwapLogo from "../../Assets/images/uniswap.png"
const BuyNow = () => {
  return (
    <div>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={uniSwapLogo} alt="" />
                <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x89a081999249407c1153e135a2af7d323419a66a">Buy Einpunk Now</a>
            </div>
            <div className='dex-exchange'>
                <img src={uniSwapLogo} alt="" />
                <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x89a081999249407c1153e135a2af7d323419a66a">Buy Einpunk Now</a>
            </div>
            
        </div>
    </div>
  )
}

export default BuyNow