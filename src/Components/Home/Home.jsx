import React from 'react'
import './Home.scss'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'; 

const Home = ({ page }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className='home-container'>
        {
          page?.landPage?.slider_images.map((data, i) => {
            return (
              <div className="left-container" key={i}>
                <div className="content" style={{color:page?.landPage?.client?.theme_color}}z>{data?.heading}</div>
                <div className="para">{data.sub_text}</div>
                <div className="btn">
                  <a  style={{backgroundColor:page?.landPage?.client?.theme_color}}href={'tel:' + page?.landPage?.client?.phone_no}>Call Now</a>
                </div>
              </div>
            );
          })
        }

        <div className="right-container">
          <React.Fragment>
            <ModalVideo
              channel='youtube'
              autoplay="1" isOpen={isOpen} videoId="OCWwOH_eqWI" onClose={() => setOpen(false)} />
            <div className="startContainer">
              <button style={{backgroundColor:page?.landPage?.client?.theme_color}} className="button pulseBox" onClick={() => setOpen(true)}><AiOutlineCaretRight className='icon' /> </button>
            </div>
          </React.Fragment>
        </div>
      </div>
    </>
  )
}

export default Home
