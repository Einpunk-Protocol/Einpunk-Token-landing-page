import React from 'react'
import "./HowToBuy.css"
import {Tag} from 'antd'
import howToBuyImage from "../../Assets/images/How to buy Illustration.png"

const HowToBuy = () => {
  return (
    <div className='how-to-buy-container'>
        <h4>How to Buy</h4>
        <div className='how-to-buy-details'>
            <div className='how-to-buy-text'>
               <h5><Tag color="#269AFE" className="tag">1</Tag>
               Go to the Apple or Play store and download Trust Wallet or MetaMask.
               </h5>
               <h5><Tag color="#269AFE" className="tag">2</Tag>
               Purchase ETH via the app, or deposit to your address.
               </h5>
            </div>
            <div className='how-to-buy-image'>
                <img src={howToBuyImage} alt="How to Buy Illustration" />
            </div>
        </div>
    </div>
  )
}

export default HowToBuy