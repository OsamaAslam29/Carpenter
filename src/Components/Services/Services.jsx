import React from 'react'
import './Services.scss'
import { ReactComponent as Logo } from '../../Assets/box.svg';
import Fade from 'react-reveal/Fade';

const Services = ({ page }) => {
  return (
    <div className='services-container' id='services'>
      <Fade bottom>
        <div className="content">
          <div className="flex-text">
            <div ></div>
            <h3>What We Are?</h3>
          </div>
          <div className="data">
            <h4>Services We <span>Offer</span></h4>
          </div>
        </div>
      </Fade>
      <div className="flex-cards">
        {
          page?.landPage?.services.map((data, i) => {
            return (
              <div className="card" key={i}>
                <div className="back_drop"></div>
                <div className="logo">
                  <Logo className='icon' />
                </div>
                <div className="heading">{data.service_img_title}</div>
                <div className="para">{data.service_img_description.replace(/<[^>]+>/g, '')}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services
