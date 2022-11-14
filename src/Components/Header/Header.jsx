import React from 'react'
import './Header.scss'
import { MdLocationPin } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="left-section">
                <div className="locatin">
                    <MdLocationPin className='icon' style={{ fontSize: "30px" }} />
                    <div>Woodstock GA</div>
                </div>
                <div className="email">
                    <IoIosMail className='icon' style={{ fontSize: "30px" }} />
                    <div>ManuelCotrich@firststrikepestelimination.com</div>
                </div>
            </div>
            <div className="right-section">
                <div className="phone">
                    <FaPhoneAlt className='icon' />
                    <div>(470) 999-6819</div>
                </div>
                <div className="social">
                    <AiFillYoutube className='icon' style={{ fontSize: "30px" }} />
                    <BsGlobe className='icon' />
                    <AiFillInstagram className='icon' style={{ fontSize: "30px" }} />
                    <FaYelp className='icon' />
                    <BsGoogle className='icon' />
                    <FaFacebookF className='icon' />

                </div>
            </div>
        </div>
    )
}

export default Header
