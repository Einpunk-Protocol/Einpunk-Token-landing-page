import React from 'react'
import "./Roadmap.css"
import {Tag} from 'antd'

const Roadmap = () => {
  return (
    <div className='roadmap-container'>
        <h4 className='roadmap-text'>Roadmap</h4>
        <p className='roadmap-note'>Note: We are determined to follow through each project listed, within their given timeframes.</p>
        <div className='roadmap-paletees'>
        <div className='roadmap-paletee'>
            <h5>Phase 1</h5>
            <p>Einpunk Token Launch <Tag color="green">Done</Tag></p>
            <p>500 holders <Tag color="yellow">Ungoing</Tag></p>
            <p>2000 wallet Transactions</p>
            <p>Website Launch</p>
            <p>Contract Auditing by solidity finance</p>
            <p>1000 organic telegram members</p>
            <p>Creation of Chinese community</p>
        </div>
        <div className='roadmap-paletee'>
            <h5>Phase 2</h5>
            <p>CoinMarketCap & Coin gecko listing</p>
            <p>5000 telegram members</p>
            <p>2000 wallet Transactions</p>
            <p>2000 holders</p>
            <p>Listing on a centralised exchange</p>
        </div>
        </div>
        <div className='roadmap-paletees'>
        <div className='roadmap-paletee'>
            <h5>Phase 3</h5>
            <p>20,000 telegram members</p>
            <p>12,000 holders</p>
            <p>Large influencer marketing</p>
            <p>Project review</p>
            <p>Website redesign</p>
        </div>
        <div className='roadmap-paletee'>
            <h5>Phase 4</h5>
            <p>70,000 holders</p>
            <p>100,000 telegram members</p>
            <p>Launch of Einpunk Market website</p>
            <p>Launch of Einpunk Dapp</p>
            <p>Increase marketing</p>
            <p>Partnership announcement</p>
            <p>Listing on more Major Top CEX</p>
        </div>
        </div>
    </div>
  )
}

export default Roadmap