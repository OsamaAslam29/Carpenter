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

const Header = ({page}) => {
    return (
        <Fade top>
            <div className='header-container'>
                <div className="left-section">
                    <a href='https://www.google.com/maps/place/United+States/@37.2755783,-104.6571311,5z/data=!3m1!4b1!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw' className="locatin">
                        <MdLocationPin className='icon' style={{ fontSize: "30px" }} />
                        <div>Woodstock GA</div>
                        
                    </a>
                    <a href='mailto:ManuelCotrich@firststrikepestelimination.com' className="email">
                        <IoIosMail className='icon' style={{ fontSize: "30px" }} />
                        <div>ManuelCotrich@firststrikepestelimination.com</div>
                    </a>
                </div>
                <div className="right-section">
                    <a href='tel:(470) 999-6819' className="phone">
                        <FaPhoneAlt className='icon' />
                        <div>(470) 999-6819</div>
                    </a>
                    <div className="social">
                        <a href="https://youtu.be/lP2FJCJlsQY">
                            <AiFillYoutube className='icon' style={{ fontSize: "30px" }} />
                        </a>
                        <a href="https://firststrikepestelimination.com/">
                            <BsGlobe className='icon' />
                        </a>
                        <a href="https://www.instagram.com/firststrikepestelimination/">
                            <AiFillInstagram className='icon' style={{ fontSize: "30px" }} />
                        </a>
                        <a href="https://www.yelp.com/biz/first-strike-pest-elimination-woodstock">
                            <FaYelp className='icon' />
                        </a>
                        <a href="https://goo.gl/maps/v3XK3rW4sVQXP56Q6">
                            <BsGoogle className='icon' />
                        </a>
                        <a href="https://www.facebook.com/people/First-Strike-Pest-Elimination/100087630729720/">
                            <FaFacebookF className='icon' />
                        </a>

                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Header
