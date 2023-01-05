import React from 'react'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

import { AiOutlineCaretRight } from 'react-icons/ai';

import './Home.scss'





const Home = ({ page }) => {

//  let regex = /http\:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})/;

//  let url = 'http://www.youtube.com/watch?v=Ahg6qcgoay4';
 
//  let  id = url.match(regex)[1]; // id = 'Ahg6qcgoay4'
//  console.log(id)
var urls = [
  page?.landPage?.client?.video_link
];

var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    
for (i = 0; i < urls.length; ++i) {
    r = urls[i].match(rx);
    console.log(r[1]);
}

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
          {/* <React.Fragment> */}
          {/* https://www.youtube.com/embed/OCWwOH_eqWI */}
          <ModalVideo
            channel='youtube'
            autoplay="1" isOpen={isOpen} videoId={r[1]} onClose={() => setOpen(false)} />
          <div className="startContainer">
            <button className="button pulseBox" onClick={() => setOpen(true)}><AiOutlineCaretRight className='icon' /> </button>
          </div>
          {/* </React.Fragment> */}
        </div>
      </div>
    </>
  )
}

export default Home
