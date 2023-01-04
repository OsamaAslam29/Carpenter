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
            <div className="flex-cards">
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>

                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading">{page?.obj?.service_heading1}</div>
                        <div className="para">{page?.obj?.service_description1.replace(/<[^>]+>/g, '')}</div>
                    </div>
                </Roll>

                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>

                        <div className="logo">
                            <Logo className='icon'/>
                        </div>
                        <div className="heading">{page?.obj?.service_heading2}</div>
                        <div className="para">{page?.obj?.service_description2.replace(/<[^>]+>/g, '')}</div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">
                        <div className="back_drop"></div>
                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading">{page?.obj?.service_heading3}</div>
                        <div className="para">{page?.obj?.service_description3.replace(/<[^>]+>/g, '')}</div>
                    </div>
                </Roll>
                <Roll left>
                    <div className="card">

                        <div className="back_drop"></div>

                        <div className="logo">
                            <Logo className='icon' />
                        </div>
                        <div className="heading">{page?.obj?.service_heading4}</div>
                        <div className="para">{page?.obj?.service_description4.replace(/<[^>]+>/g, '')}</div>
                    </div>
                </Roll>
            </div>
        </div>
    );
}

export default Cards