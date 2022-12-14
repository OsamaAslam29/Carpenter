import React from 'react'
import './Cards.scss'
import { ReactComponent as Logo } from '../../Assets/search.svg';
import Roll from 'react-reveal/Roll';


const Cards = ({ page }) => {

    console.log("page", page?.landPage?.testimonails);
    return (
        <div className="card-container" id="about">
            <div className="heading-container">
                WHY CHOOSE <span>US</span>
            </div>
            {/* Data before Integration / Your previous Data */}
            <div className="flex-cards">
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>

                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading">Certified Service Provider</div>
                        <div className="para">We are a certified agency that provides quality bed bugs control facilities.</div>
                    </div>
                </Roll>

                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>

                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading"> Affordable Bed Bugs Treatment</div>
                        <div className="para">For the valued customers, our service is highly market competitive.</div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>
                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading">Professional Workers</div>
                        <div className="para">Our workers are licensed, and they are all highly professional and competent in their work.</div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">

                        <div className="back_drop"></div>

                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading">Guaranteed Carpenter Ant Solution</div>
                        <div className="para">Our service is guaranteed, and we assure you to give the best result; a place free of carpenter ants.</div>
                    </div>
                </Roll>

            </div>

            {/* <div className="flex-cards">
                {page?.landPage?.testimonails.map((data, i) => {
                    return (
                        <div className="card" key={i}>
                            <div className="back_drop"></div>

                            <div className="logo">
                                <Logo className="icon" />
                            </div>
                            <div className="heading">{data?.username}</div>
                            <div className="para">{data?.description}</div>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}

export default Cards