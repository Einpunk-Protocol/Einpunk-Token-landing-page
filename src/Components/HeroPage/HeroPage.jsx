import React, {useRef, useState} from 'react'
import {message} from "antd"
import "./HeroPage.css"
import {FaClone} from "react-icons/fa"
import Line from "../../Assets/images/Line.png"
import {CopyToClipboard} from "react-copy-to-clipboard"
import EinpunkIllustration from "../../Assets/images/einpunk illustration.png"

const HeroPage = () => {
    const [messageApi, contextHolder] = message.useMessage()

    let url = "https://t.me/+cBzvl0ZWRkxjYmMx"
    let contractAddress = "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B"
    
    const [copy, setCopy] = useState("")
    const contractInput = useRef(null)
    
    let copyToClipboard = (e) =>{
        contractInput.current.select()
        document.execCommand("copy")
        setCopy(true)
        messageApi.open({
            type: "success",
            content: "Copied " + contractAddress
        })
    }

  return (
    <div className='heropage-container'>
        
        <img src={Line} alt=""  className='line'/>
        <div className='heropage-details'>
            <div className='heropage-text'>
                <h2>The World's Fastest Growing <br/> Token Protocol</h2>
                <p><span>Einpunk Token</span> is a unique deflationary token with a 1% slippage, total supply of 1000T, 100% ownership renounced and Liquidity pool locked forever.</p>
                <p>31% of Einpunk Tokens have been burnt so far.
                The goal of the project is to establish a NFT club (Einpunk Club), where users can hold, buy and sell unique NFTs on a p2p platform.
                </p>
                <div className='contract-input'>
                <h5>Einpunk Token Contract Address</h5>
                {contextHolder}
                <input type="text" placeholder="Contract Address" value={contractAddress} ref={contractInput}/>
                <FaClone onClick={copyToClipboard} className="copy-icon"/>
                </div>
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