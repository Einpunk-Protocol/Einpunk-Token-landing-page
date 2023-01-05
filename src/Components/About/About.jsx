import React from 'react'
import "./About.css"
import DappsImage from "../../Assets/images/Dapps1-c-1.png"
import NftsImage from "../../Assets/images/NFTs.png"
import DefiImage from "../../Assets/images/DeFI.png"
import AirdropImage from "../../Assets/images/Airdrops.png"
import Roadmap from '../Roadmap/Roadmap'
const About = () => {
  return (
    <>
    <div className='about-container'>
        <h3>Einpunk Token Features</h3>
        <div className='einpunk-features'>
            <div className='einpunk-feature'>
            <img src={DappsImage} alt="" />
            <h4>Dapps</h4>
            <p>The dev team will be looking into develop amazing usecases for Einpunk token and the Community e.g Einpunk Exchange</p>
            </div>

            <div className='einpunk-feature'>
            <img src={NftsImage} alt="" />
            <h4>NFTs</h4>
            <p>We will be exploring the NTFs ecosystem, we will have a marketspace for Einpunk Community as well as the Einpunk Holders.</p>
            </div>

            <div className='einpunk-feature'>
            <img src={DefiImage} alt="" />
            <h4>DeFi</h4>
            <p>Track, Discover And Analyze The Latest DeFi Projects</p>
            </div>
            <div className='einpunk-feature'>
            <img src={AirdropImage} alt="" />
            <h4>Airdrop</h4>
            <p>Sign Up For Free Einpunk Airdops</p>
            </div>
        </div>
    </div>
    <Roadmap/>
    </>
  )
}

export default About