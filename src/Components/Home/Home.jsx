import React from 'react'
import './Home.scss'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai';


const Home = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='home-container' id='home'>
      <div className="left-container">
        <div className="content">Carpenter Ant Treatment in  Woodstock GA</div>
        <div className="para">First Strike Pest Elimination</div>
        <div className="btn">
          <a href="#">Call Now</a>
        </div>
      </div>
      <div className="right-container">
        <React.Fragment>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
          {/* <button className="btn-primary button pulseBox" onClick={() => setOpen(true)}>VIEW DEMO</button> */}
          <div class="startContainer">
            <button class="button pulseBox" onClick={() => setOpen(true)}><AiOutlineCaretRight className='icon'/> </button>
          </div>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Home
