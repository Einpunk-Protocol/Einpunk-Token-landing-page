import React, {useState} from 'react'
import "./NavBar.css"
import {Drawer} from "antd"
import { FaAlignRight, FaTimes } from "react-icons/fa";
import {NavLink} from "react-router-dom"
import EinpunkLogo from "../../Assets/images/Einpunk Logo white.png"

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const showNavBar = () =>{
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    
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
            <FaAlignRight className='menu-bar' onClick={showNavBar}/>
        </div>
        <Drawer closable={false} placement='bottom' open={open} className='menu-drawer' onClose={onClose}>
            <FaTimes onClick={onClose} className="closeIcon"/>
            <ul>
                <li><NavLink to="/" className="nav-links"
                style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })} onClick={onClose}>Home</NavLink></li>
                <li><NavLink to="/about" className="nav-links" onClick={onClose} style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>About</NavLink></li>
                <li><NavLink to="/howtobuy" className="nav-links" onClick={onClose} style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>How to buy</NavLink></li>
                <li><NavLink to="/buynow" className="nav-links" onClick={onClose} style={({isActive}) =>({
                    color: isActive ? "#269AFE" : "#FFF"
                })}>Buy Now</NavLink></li>
                <button className='button'>Connect Wallet</button>
            </ul>
        </Drawer>

    </div>
  )
}

export default NavBar