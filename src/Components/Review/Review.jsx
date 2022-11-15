import React from 'react'
import './Review.scss'
import review from '../../Assets/review.png'

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
            <div className="content" style={{marginTop:"3rem"}}>
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
                    
                </div>
            </div>

        </div>
    )
}

export default Review
