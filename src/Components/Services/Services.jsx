import React from 'react'
import './Services.scss'
import box from '../../Assets/box.svg'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Services = () => {
  return (
    <div className='services-container' id='services'>
      <Fade bottom>
        <div className="content">
          <div className="flex-text">
            <div></div>
            <h3>
              Who We Are?</h3>
          </div>
          <div className="data">
            <h4>Services We <span>Offer</span></h4>
          </div>
        </div>
      </Fade>
      <div className="flex-cards">
        <Roll left>
          <div className="card">
            <div className="back_drop"></div>
            <div className="logo">
              <img src={box} alt="error" />
            </div>
            <div className="heading">Bee Removal Service</div>
            <div className="para">We are an experienced bee removal company from residential locations.</div>
          </div>
        </Roll>
        <Roll left>
          <div className="card">
            <div className="back_drop"></div>
            <div className="logo">
              <img src={box} alt="" />
            </div>
            <div className="heading">Bed Bug Control Service</div>
            <div className="para">Getting rid of bugs is easy now, as we are here to deal professionally.</div>
          </div>
        </Roll>
        <Roll left>
          <div className="card">
            <div className="back_drop"></div>
            <div className="logo">
              <img src={box} alt="" />
            </div>
            <div className="heading">Wasp Removal Service</div>
            <div className="para">Now the danger of wasps can be tamed with the help of our professional workers</div>
          </div>
        </Roll>
        <Roll left>
          <div className="card">
            <div className="back_drop"></div>
            <div className="logo">
              <img src={box} alt="" />
            </div>
            <div className="heading">Carpenter Ant Treatment</div>
            <div className="para">Save your valuable wood and furniture by getting our effective carpenter ant treatment.</div>
          </div>
        </Roll>
      </div>
    </div>
  )
}

export default Services
