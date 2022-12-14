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
import Fade from 'react-reveal/Fade';

const Header = ({ page }) => {
    return (
        <Fade top>
            <div className='header-container'  id='home'>
                <div className="left-section">
                    <a href={page?.landPage?.google_map} className="locatin">
                        <MdLocationPin className='icon' style={{ fontSize: "30px" }} />
                        <div>{(page?.landPage?.address)}</div>

                    </a>
                    <a href={'mailto:' + page?.landPage?.client?.email} className="email">
                        <IoIosMail className='icon' style={{ fontSize: "30px" }} />
                        <div>{page?.landPage?.client?.email}</div>
                    </a>
                </div>
                <div className="right-section">
                    <a href={'tel:' + page?.landPage?.client?.phone_no} className="phone">
                        <FaPhoneAlt className='icon' />
                        <div>{page?.landPage?.client?.phone_no}</div>
                    </a>
                    <div className="social">
                        <a href={page?.landPage?.client?.youtube_link}>
                            <AiFillYoutube className='icon' style={{ fontSize: "30px" }} />
                        </a>
                        <a href={page?.landPage?.client?.website_link}>
                            <BsGlobe className='icon' />
                        </a>
                        <a href={page?.landPage?.client?.instagram_link}>
                            <AiFillInstagram className='icon' style={{ fontSize: "30px" }} />
                        </a>
                        <a href={page?.landPage?.client?.yelp_link}>
                            <FaYelp className='icon' />
                        </a>
                        <a href={page?.landPage?.google_map}>
                            <BsGoogle className='icon' />
                        </a>
                        <a href={page?.landPage?.client?.facebook_link}>
                            <FaFacebookF className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Header
