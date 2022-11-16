import React from 'react'
import './Review.scss'
import review from '../../Assets/review.png'
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import customer from "../../Assets/customer.svg"

const Review = () => {
    return (
        <div className='review-container'>
            <div className="content">
                <div className="flex-text">
                    <div></div>
                    <h3>Google Review</h3>
                </div>
                <div className="data">
                    <h4>Write a Review</h4>
                </div>
            </div>
            <div className='review'>
                <img src={review} alt="" />
            </div>
            <div className="review-button">
                <a href="#">Write a Review</a>
            </div>
            <div className="content" style={{ marginTop: "3rem" }}>
                <div className="flex-text">
                    <div></div>
                    <h3>What Client Say's</h3>
                </div>
                <div className="data">
                    <h4>Testimo<span>nials</span></h4>
                </div>
            </div>
            <div className="flex-testimonial">
                <div className="testimonail-card">
                    <ImQuotesLeft className='icon' />
                    <p>Great company as we used them for both our business & home.</p>
                    <div className='border'></div>
                    <div className="profile">
                        <img src={customer} alt="" />
                        <div className="data">
                            <h5>Shawn Potters</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                    <ImQuotesRight className='icon' />

                </div>
                <div className="testimonail-card">
                    <ImQuotesLeft className='icon' />
                    <p>I highly recommend their service to anyone who needs carpenter ant treatment.</p>
                    <div className='border'></div>
                    <div className="profile">
                        <img src={customer} alt="" />
                        <div className="data">
                            <h5>Ray Coleman</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                    <ImQuotesRight className='icon' />

                </div>
                <div className="testimonail-card">
                    <ImQuotesLeft className='icon' />
                    <p>My experience with this company has been nothing but exceptional.</p>
                    <div className='border'></div>
                    <div className="profile">
                        <img src={customer} alt="" />
                        <div className="data">
                            <h5>Bella</h5>
                            <p>Customer</p>
                        </div>
                    </div>
                    <ImQuotesRight className='icon' />

                </div>
            </div>

        </div>
    )
}

export default Review
