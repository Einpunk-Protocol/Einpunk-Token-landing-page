import React from 'react'
import "./BuyNow.css"
import {motion} from "framer-motion"
import uniSwapLogo from "../../Assets/images/uniswap.png"
import pancakeSwapLogo from "../../Assets/images/pancakeswaplogo.png"
const BuyNow = () => {
  return (
    <div className='buynow-container'>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={uniSwapLogo} alt="" />
                <motion.a
                whileHover={{scale: 1.1}}
                 href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x89a081999249407c1153e135a2af7d323419a66a">Buy Einpunk Now</motion.a>
            </div>
            <div className='dex-exchange'>
                <img src={pancakeSwapLogo} alt="" />
                <motion.a
                whileHover={{scale: 1.1}}
                 href="https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x89a081999249407C1153e135A2Af7d323419A66A">Buy Einpunk Now</motion.a>
            </div>
            
        </div>
    </div>
  )
}

export default BuyNow