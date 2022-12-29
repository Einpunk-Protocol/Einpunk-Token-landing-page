import React from 'react'
import "./NavBar.css"
import {NavLink} from "react-router-dom"
import EinpunkLogo from "../../Assets/images/Einpunk Logo white.png"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <img src={EinpunkLogo} alt="Einpunk Logo" />
        </div>
        <div className='menu-list'>
            <ul>
                <li><NavLink to="/" className="nav-links">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-links">About</NavLink></li>
                <li>How to buy</li>
                <li>Buy Now</li>
                <button>Connect Wallet</button>
            </ul>
        </div>
    </div>
  )
}

export default NavBar