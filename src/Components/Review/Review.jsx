import React from 'react'
import './Review.scss'
import review from '../../Assets/review.png'
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import Fade from 'react-reveal/Fade';
import NewTestimonials from '../NewTestimonials/NewTestimonials';



const Review = ({ page }) => {
    return (
        <div className='review-container' id='review'>
            <Fade bottom>

                <div className="content">
                    <div className="flex-text">
                        <div style={{backgroundColor:page?.landPage?.client?.theme_color}}></div>
                        <h3 style={{color:page?.landPage?.client?.theme_color}}>Google Review</h3>
                    </div>
                    <div className="data">
                        <h4>Write a Review</h4>
                    </div>
                </div>
            </Fade>
            <div className='review'>
                {/* <img src={page?.landPage?.google_review} alt="Image not present in DB" /> */}
                <img src={review} alt="Image not present in DB" />
            </div>
            <div className="review-button">
                <a style={{backgroundColor:page?.landPage?.client?.theme_color}} href={page?.landPage?.review_slug}>Write a Review</a>
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

                {/* <NewTestimonials sub={page} /> */}

        </div>
    )
}

export default Review
