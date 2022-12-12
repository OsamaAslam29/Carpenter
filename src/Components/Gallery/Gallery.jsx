import React from 'react'
import './Gallery.scss'
import first from '../../Assets/first.jpg'
import second from '../../Assets/second.jpg'
import third from '../../Assets/third.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Gallery = ({page}) => {
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
          <div className='position'>
            <div className="img">
              <img src={first} alt="" />
            </div>
              <a href="https://firmtechservices.com/landingpage/gallery_images/1665093512_bed-bug-control-service-in-Kennesaw-GA.webp">

              <AiOutlinePlus className='icon' />
              </a>
          </div>
        </Bounce>
        <Bounce bottom>
          <div className='position'>
            <div className="img">
              <img src={second} alt="" />
            </div>
              <a href="https://firmtechservices.com/landingpage/gallery_images/1665093512_carpenter-ant-treatment-in-Woodstock-GA.webp">

              <AiOutlinePlus className='icon' />
              </a>
          </div>
        </Bounce>
        <Bounce right>
          <div className='position'>
            <div className="img">
              <img src={third} alt="" />
            </div>
              <a href="https://firmtechservices.com/landingpage/gallery_images/1665093512_wasp-removal-service-in-Cartersville-GA.webp">

              <AiOutlinePlus className='icon' />
              </a>
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default Gallery
