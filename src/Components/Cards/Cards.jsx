import React from 'react'
import './Cards.scss'
import search from '../../Assets/search.svg'

const Cards = () => {
    return (
        <div className='card-container' id='about'>
            <div className="heading-container">WHY CHOOSE <span>US</span></div>
            <div className="flex-cards">
                <div className="card">
                    <div className="logo">
                        <img src={search} alt="error" />
                    </div>
                    <div className="heading">Certified Service Provider</div>
                    <div className="para">We are a certified agency that provides quality bed bugs control facilities.</div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={search} alt="" />
                    </div>
                    <div className="heading"> Affordable Bed Bugs Treatment</div>
                    <div className="para">For the valued customers, our service is highly market competitive.</div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={search} alt="" />
                    </div>
                    <div className="heading">Professional Workers</div>
                    <div className="para">Our workers are licensed, and they are all highly professional and competent in their work.</div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={search} alt="" />
                    </div>
                    <div className="heading">Guaranteed Carpenter Ant Solution</div>
                    <div className="para">Our service is guaranteed, and we assure you to give the best result; a place free of carpenter ants.</div>
                </div>
            </div>

        </div>
    )
}

export default Cards
