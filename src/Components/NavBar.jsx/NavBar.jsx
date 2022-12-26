import React from 'react'
import "./NavBar.css"
import EinpunkLogo from "../../Assets/images/Einpunk Logo white.png"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            <img src={EinpunkLogo} alt="Einpunk Logo" />

        </div>
    </div>
  )
}

export default NavBar