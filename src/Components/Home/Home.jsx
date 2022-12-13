import React from 'react'
import './Home.scss'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';
import Bounce from 'react-reveal/Bounce';

const Home = ({page}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className='home-container'>
        <Bounce left>
          <div className="left-container">
            <div className="content">{page?.landPage?.client?.name}</div>
            <div className="para">First Strike Pest Elimination</div>
            <div className="btn">
              <a href={'tel:' + page?.landPage?.client?.phone_no}>Call Now</a>
            </div>
          </div>
        </Bounce>
        <div className="right-container">
          <React.Fragment>
            <ModalVideo
             channel='youtube'
              autoplay="1" isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
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
