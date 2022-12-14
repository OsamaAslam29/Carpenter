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
                    <a href='https://www.google.com/maps/place/United+States/@37.2755783,-104.6571311,5z/data=!3m1!4b1!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw' className="locatin">
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
                        <a href={page?.landPage?.client?.instagram_link}>
                            <BsGlobe className='icon' />
                        </a>
                        <a href={page?.landPage?.client?.instagram_link}>
                            <AiFillInstagram className='icon' style={{ fontSize: "30px" }} />
                        </a>
                        <a href={page?.landPage?.client?.yelp_link}>
                            <FaYelp className='icon' />
                        </a>
                        <a href={page?.landPage?.client?.instagram_link}>
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
