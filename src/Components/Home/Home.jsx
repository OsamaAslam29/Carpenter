import React from 'react'
import './Home.scss'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';
import Bounce from 'react-reveal/Bounce';

const Home = ({ page }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className='home-container'>
        {
          page?.landPage?.slider_images.map((data, i) => {
            return (
              <div className="left-container" key={i}>
                <div className="content">{data?.heading}</div>
                <div className="para">{data.sub_text}</div>
                <div className="btn">
                  <a href={'tel:' + page?.landPage?.client?.phone_no}>Call Now</a>
                </div>
              </div>
            );
          })
        }

        <div className="right-container">
          <React.Fragment>
            <ModalVideo
              channel='youtube'
              autoplay="1" isOpen={isOpen} videoId={page?.landPage?.client?.video_link} onClose={() => setOpen(false)} />
            <div className="startContainer">
              <button className="button pulseBox" onClick={() => setOpen(true)}><AiOutlineCaretRight className='icon' /> </button>
            </div>
          </React.Fragment>
        </div>
      </div>
    </>
  )
}

export default Home
