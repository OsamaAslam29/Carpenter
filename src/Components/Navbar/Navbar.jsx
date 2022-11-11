import React from 'react'
import './Navbar.scss'
import logo from '../../Assets/logo.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <div className="web-menu">
                    <div className='left'>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Gallery</a>
                        <a href="#">Reviews</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className='right'>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="mobile-menu">
                    
                </div>

            </div>

        </div>
    )
}

export default Navbar
