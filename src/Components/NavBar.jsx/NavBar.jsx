import React from 'react'
import "./NavBar.css"
import { FaAlignRight } from "react-icons/fa";
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
                <li><NavLink to="/" className="nav-links"
                style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>Home</NavLink></li>
                <li><NavLink to="/about" className="nav-links" style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>About</NavLink></li>
                <li><NavLink to="/howtobuy" className="nav-links" style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>How to buy</NavLink></li>
                <li><NavLink to="/buynow" className="nav-links" style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>Buy Now</NavLink></li>
                <button>Connect Wallet</button>
            </ul>
            <FaAlignRight className='menu-bar'/>
        </div>
    </div>
  )
}

export default NavBar