import React from 'react'
import "./BuyNow.css"
import {motion} from "framer-motion"
import uniSwapLogo from "../../Assets/images/uniswap.png"
import pancakeSwapLogo from "../../Assets/images/pancakeswaplogo.png"
const BuyNow = () => {
  return (
    <div className='buynow-container'>
      <h3>ETH/EinpunkUSD</h3>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={uniSwapLogo} alt="" />
                <motion.a
                whileTap={{scale: 1.1}}
                 href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x89a081999249407c1153e135a2af7d323419a66a">Buy Einpunk Now</motion.a>
            </div>
            <div className='dex-exchange'>
                <img src={pancakeSwapLogo} alt="" />
                <motion.a
                whileTap={{scale: 1.1}}
                 href="https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x89a081999249407C1153e135A2Af7d323419A66A">Buy Einpunk Now</motion.a>
            </div>
        </div>
        <h3>BUSD/EinpunkUSD</h3>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={pancakeSwapLogo} alt="" />
                <motion.a
                whileTap={{scale: 1.1}}
                 href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56">Buy Einpunk Now</motion.a>
            </div>
            
        </div>
        <h3>Cake/EinpunkUSD</h3>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={pancakeSwapLogo} alt="" />
                <motion.a
                whileTap={{scale: 1.1}}
                 href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">Buy Einpunk Now</motion.a>
            </div> 
        </div>
        <h3>Cake/EinpunkUSD</h3>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={pancakeSwapLogo} alt="" />
                <motion.a
                whileTap={{scale: 1.1}}
                 href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">Buy Einpunk Now</motion.a>
            </div> 
        </div>
        <h3>BNB/EinpunkUSD</h3>
        <div className='dex-exchanges'>
            <div className='dex-exchange'>
                <img src={pancakeSwapLogo} alt="" />
                <motion.a
                whileTap={{scale: 1.1}}
                 href="https://pancakeswap.finance/swap?inputCurrency=0xE933f2ea66764af369B3D5Ee7295a0B976387c0c&outputCurrency=BNB">Buy Einpunk Now</motion.a>
            </div> 
        </div>
    </div>
  )
}

export default BuyNow