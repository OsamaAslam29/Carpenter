import React from 'react'
import './Gallery.scss'
import first from '../../Assets/first.jpg'
import second from '../../Assets/second.jpg'
import third from '../../Assets/third.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Gallery = ({ page }) => {
  return (
    <div className='gallery-container' id='gallery'>
      <Fade bottom>
        <div className="content">
          <div className="flex-text">
            <div style={{ backgroundColor: page?.landPage?.client?.theme_color }}></div>
            <h3 style={{ color: page?.landPage?.client?.theme_color }}>Our Work</h3>
          </div>
          <div className="data">
            <h4>Gallery</h4>
          </div>
        </div>
      </Fade>
      <div className="flex-images">
        {
          page?.landPage?.images.map((data, i) => {
            return (
              <div className='position' key={i}>
                <div className="img">
                  <img src={page?.landPage?.images?.gallery_img} alt="" />
                  {/* <img src={second} alt="" /> */}
                </div>
                <a href={page?.landPage?.images?.gallery_img}>
                  <AiOutlinePlus className='icon' />
                </a>
              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default Gallery
