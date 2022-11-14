import React from 'react'
import './Contact.scss'
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="content">
                <div className="flex-text">
                    <div></div>
                    <h3>Keep In Touch</h3>
                </div>
                <div className="data">
                    <h4>Contact</h4>
                </div>
            </div>
            <div className="flex-forms">
                <div className="contact">
                    <div className="call">
                        <div className='flex-bio'>
                            <FaPhoneVolume className='icon' />
                        </div>
                        <div className="flex-call">
                            <h2>Call Us</h2>
                            <a>(470) 999-6819</a>
                        </div>
                    </div>
                    <div className="call">
                        <div className='flex-bio'>
                            <FaEnvelopeOpenText className='icon' />
                        </div>
                        <div className="flex-call">
                            <h2>Mail Us</h2>
                            <a>ManuelCotrich@firststrikepestelimination.com</a>
                        </div>
                    </div>
                    <div className="call">
                        <div className='flex-bio'>
                            <FaMapMarkerAlt className='icon' />
                        </div>
                        <div className="flex-call">
                            <h2>Office Address</h2>
                            <a>Woodstock GA</a>
                        </div>
                    </div>
                    <div className="video-section">
                        <iframe src="https://www.youtube.com/embed/FxoqucEUVFw">
                        </iframe>
                    </div>
                </div>
                <div className="form">
                    <div className="flex-input">
                        <input type="text" name="" id="" placeholder='Your Name' />
                        <input type="text" name="" id="" placeholder='Your Email' />
                    </div>
                    <div className="flex-input">
                        <input type="text" name="" id="" placeholder='Phone no' />
                        <input type="text" name="" id="" placeholder='Subect' />
                    </div>
                    <div className="textarea">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="send-button">
                        <a href="#">Send Message</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
