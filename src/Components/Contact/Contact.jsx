import React from 'react'
import './Contact.scss'
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Recaptcha from "react-google-recaptcha"

const Contact = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
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
                            <h5>Call Us</h5>
                            <p>(470) 999-6819</p>
                        </div>
                    </div>
                    <div className="call">
                        <div className='flex-bio'>
                            <FaEnvelopeOpenText className='icon' />
                        </div>
                        <div className="flex-call">
                            <h5>Mail Us</h5>
                            <p>ManuelCotrich@firststrikepestelimination.com</p>
                        </div>
                    </div>
                    <div className="call">
                        <div className='flex-bio'>
                            <FaMapMarkerAlt className='icon' />
                        </div>
                        <div className="flex-call">
                            <h5>Office Address</h5>
                            <p>Woodstock GA</p>
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
                        <textarea name="" id="" cols="65" rows="10"></textarea>
                    </div>
                    <div className="recapcha">
                        <Recaptcha
                            sitekey="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"
                            onChange={onChange}
                        />
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
