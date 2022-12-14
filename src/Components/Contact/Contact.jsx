import React from 'react'
import './Contact.scss'
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Recaptcha from "react-google-recaptcha"
import Fade from 'react-reveal/Fade';


const Contact = ({page}) => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div className='contact-container'>
            <Fade bottom>
                <div className="content">
                    <div className="flex-text">
                        <div></div>
                        <h3>Keep In Touch</h3>
                    </div>
                    <div className="data">
                        <h4>Contact</h4>
                    </div>
                </div>
            </Fade>
            <div className="flex-forms">
                <Fade bottom>
                    <div className="contact">
                        <div className="call">
                            <div className='flex-bio'>
                                <FaPhoneVolume className='icon' />
                            </div>
                            <div className="flex-call">
                                <h5>Call Us</h5>
                                <a href={'tel:' + page?.landPage?.client?.phone_no}>
                                    {page?.landPage?.client?.phone_no}
                                </a>
                            </div>
                        </div>
                        <div className="call">
                            <div className='flex-bio'>
                                <FaEnvelopeOpenText className='icon' />
                            </div>
                            <div className="flex-call">
                                <h5>Mail Us</h5>
                                <a href={'mailto:' + page?.landPage?.client?.email}>{page?.landPage?.client?.email}</a>
                            </div>
                        </div>
                        <div className="call">
                            <div className='flex-bio'>
                                <FaMapMarkerAlt className='icon' />
                            </div>
                            <div className="flex-call">
                                <h5>Office Address</h5>
                                <a href={page?.landPage?.google_map}>{(page?.landPage?.address)}</a>
                            </div>
                        </div>
                        <div className="video-section">
                            <iframe src={page?.landPage?.client?.video_link}>
                            </iframe>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
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
                            <textarea name="" id=""></textarea>
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
                </Fade>
            </div>

        </div>
    )
}

export default Contact
