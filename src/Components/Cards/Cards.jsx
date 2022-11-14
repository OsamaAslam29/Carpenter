import React from 'react'
import './Cards.scss'
import first from '../../Assets/logo.png'

const Cards = () => {
    return (
        <div className='card-container'>
            <div className="heading">WHY CHOOSE <span>US</span></div>
            <div className="flex-cards">
                <div className="card">
                    <div className="logo">
                        <img src={first} alt="" />
                    </div>
                    <div className="heading">Certified Service Provider</div>
                    <div className="para">We are a certified agency that provides quality bed bugs control facilities.</div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={first} alt="" />
                    </div>
                    <div className="heading">Certified Service Provider</div>
                    <div className="para">We are a certified agency that provides quality bed bugs control facilities.</div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={first} alt="" />
                    </div>
                    <div className="heading">Certified Service Provider</div>
                    <div className="para">We are a certified agency that provides quality bed bugs control facilities.</div>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={first} alt="" />
                    </div>
                    <div className="heading">Certified Service Provider</div>
                    <div className="para">We are a certified agency that provides quality bed bugs control facilities.</div>
                </div>
            </div>

        </div>
    )
}

export default Cards
