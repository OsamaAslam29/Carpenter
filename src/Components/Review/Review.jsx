import React from 'react'
import './Review.scss'
import review from '../../Assets/review.png'
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import customer from "../../Assets/customer.svg"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import NewTestimonials from '../NewTestimonials/NewTestimonials';



const Review = ({ page }) => {
    return (
        <div className='review-container' id='review'>
            <Fade bottom>

                <div className="content">
                    <div className="flex-text">
                        <div></div>
                        <h3>Google Review</h3>
                    </div>
                    <div className="data">
                        <h4>Write a Review</h4>
                    </div>
                </div>
            </Fade>
            <div className='review'>
                <img src={review} alt="" />
            </div>
            <div className="review-button">
                <a href="https://g.page/r/CXtIrP9rgGN0EAI/review">Write a Review</a>
            </div>
            <Fade bottom>
                <div className="content" style={{ marginTop: "3rem" }}>
                    <div className="flex-text">
                        <div></div>
                        <h3>What Client Say's</h3>
                    </div>
                    <div className="data">
                        <h4>Testimo<span>nials</span></h4>
                    </div>
                </div>
            </Fade>

                <NewTestimonials />

        </div>
    )
}

export default Review
