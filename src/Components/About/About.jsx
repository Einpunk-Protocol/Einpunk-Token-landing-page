import React from 'react'
import "./About.css"
import DappsImage from "../../Assets/images/Dapps1-c-1.png"
const About = () => {
  return (
    <div className='about-container'>
        <h3>Einpunk Features</h3>
        <div className='einpunk-features'>
            <img src={DappsImage} alt="" />
            <h4>Dapps</h4>
            <p>Track, Discover And Analyze The Latest Dapps</p>
        </div>
    </div>
  )
}

export default About