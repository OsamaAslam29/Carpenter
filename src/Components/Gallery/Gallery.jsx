import React from 'react'
import './Gallery.scss'
import first from '../../Assets/first.jpg'
import second from '../../Assets/second.jpg'
import third from '../../Assets/third.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Gallery = () => {
  return (
    <div className='gallery-container' id='gallery'>
      <Fade bottom>
        <div className="content">
          <div className="flex-text">
            <div></div>
            <h3>Our Work</h3>
          </div>
          <div className="data">
            <h4>Gallery</h4>
          </div>
        </div>
      </Fade>
      <div className="flex-images">
        <Bounce left>
          <div className="img">
            <img src={first} alt="" />
            <AiOutlinePlus className='icon' />
          </div>
        </Bounce>
        <Bounce bottom>
          <div className="img">
            <img src={second} alt="" />
            <AiOutlinePlus className='icon' />
          </div>
        </Bounce>
        <Bounce right>
          <div className="img">
            <img src={third} alt="" />
            <AiOutlinePlus className='icon' />
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default Gallery
