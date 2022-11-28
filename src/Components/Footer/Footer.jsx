import React from 'react'
import './Footer.scss'
import { MdLocationPin } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce';


const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className="footer">
                    <Bounce left>
                        <div className="contact">
                            <div className="heading">Carpenter Ant Treatment in <br /> Woodstock GA </div>
                            <div className="para">First Strike Pest Elimination</div>
                            <div className="info">
                                <h3>Phone: <span> (470) 999-6819</span></h3>
                                <div className="flex">
                                    <h3>Email: </h3>
                                    <span>ManuelCotrich@firststrikepestelimination.com</span>

                                </div>
                                <h3>Text: &nbsp;&nbsp;<span> (470) 999-6819</span></h3>
                            </div>
                            <div className="icons">
                                <a href="">
                                    <AiFillYoutube className='icon' />
                                </a>
                                <a href="">

                                    <BsGlobe className='icon' />
                                </a>
                                <a href="">
                                    <AiFillInstagram className='icon' />
                                </a>
                                <a href="">
                                    <FaYelp className='icon' />
                                </a>
                                <a href="">
                                    <BsGoogle className='icon' />
                                </a>
                                <a href="">
                                    <FaFacebookF className='icon' />
                                </a>
                            </div>

                        </div>
                    </Bounce>
                    <Bounce bottom>
                        <div className="links">
                            <div className="heading">Related Links</div>
                            <div className="icons" style={{ marginTop: "10px" }}>
                                <div className="icon">
                                    <FaAngleRight style={{ color: "var(--primary-color)" }} />
                                    <p>
                                        Wasp Removal Service in Cartersville GA
                                    </p>
                                </div>
                                <div className="icon">
                                    <FaAngleRight style={{ color: "var(--primary-color)" }} />
                                    <p>
                                        Bee Removal Service in Marietta GA
                                    </p>
                                </div>
                                <div className="icon">
                                    <FaAngleRight style={{ color: "var(--primary-color)" }} />
                                    <p>
                                        Bed Bug Control Service in Kennesaw GA
                                    </p>
                                </div>
                                <div className="icon">
                                    <FaAngleRight style={{ color: "var(--primary-color)" }} />
                                    <p>
                                        Cockroach Removal in Acworth GA
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Bounce>
                    <Bounce right>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52846.70171199795!2d-84.46488!3d34.122827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f517173d18a0fd%3A0x9d4c3024f39900f7!2sWoodstock%2C%20GA!5e0!3m2!1sen!2sus!4v1668440279401!5m2!1sen!2sus" width="340" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Bounce>
                </div>
            </div>
            <div className="footer-bar">
                <p>
                    © Copyright 2022 | Powered by FTS. All Right Reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
