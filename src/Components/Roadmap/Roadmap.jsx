import React from 'react'
import "./Roadmap.css"

const Roadmap = () => {
  return (
    <div className='roadmap-container'>
        <h4 className='roadmap-text'>Roadmap</h4>
        <p className='roadmap-note'>Note: We are determined to follow through each project listed, within their given timeframes.</p>
        <div className='roadmap-paletees'>
        <div className='roadmap-paletee'>
            <h5>Phase 1</h5>
            <p>Einpunk Token Launch</p>
            <p>500 holders</p>
            <p>2000 wallet Transactions</p>
            <p>Website Launch</p>
            <p>Contract Auditing by solidity finance</p>
            <p>1000 organic telegram members</p>
            <p>Creation of Chinese community</p>
        </div>
        <div className='roadmap-paletee'>
            <h5>Phase 2</h5>
            <p>Einpunk Token Launch</p>
            <p>500 holders</p>
            <p>2000 wallet Transactions</p>
            <p>Website Launch</p>
            <p>Contract Auditing by solidity finance</p>
            <p>1000 organic telegram members</p>
            <p>Creation of Chinese community</p>
        </div>
        </div>
    </div>
  )
}

export default Roadmap