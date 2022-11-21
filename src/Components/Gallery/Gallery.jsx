import React from 'react'
import './Gallery.scss'
import first from '../../Assets/first.jpg'
import second from '../../Assets/second.jpg'
import third from '../../Assets/third.jpg'
import { AiOutlinePlus } from 'react-icons/ai';

const Gallery = () => {
  return (
    <div className='gallery-container' id='gallery'>
      <div className="content">
        <div className="flex-text">
          <div></div>
          <h3>Our Work</h3>
        </div>
        <div className="data">
          <h4>Gallery</h4>
        </div>
      </div>
      <div className="flex-images">
        <div className="img">
          <img src={first} alt="" />
          <AiOutlinePlus className='icon'/>
        </div>
        <div className="img">
          <img src={second} alt="" />
          <AiOutlinePlus className='icon'/>
        </div>
        <div className="img">
          <img src={third} alt="" />
          <AiOutlinePlus className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Gallery
