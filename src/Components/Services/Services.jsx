import React from 'react'
import Fade from 'react-reveal/Fade';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ReactComponent as Logo } from '../../Assets/box.svg';

import './Services.scss'


import ServiceLoder from './ServicesLoder/ServiceLoder';
import { useEffect } from 'react';
import { useState } from 'react';





const Services = ({ page, loading }) => {

  return (
    <div className='services-container' id='services'>
      <Fade bottom>
        <div className="content">
          <div className="flex-text">
            <div ></div>
            <h3>What We Are?</h3>
          </div>
          <div className="data">
            <h4>Services We <span>Offer</span></h4>
          </div>
        </div>
      </Fade>
      <div className="flex-cards">
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#fff">

          {
            loading
              ?
              <>
                <ServiceLoder />
                <ServiceLoder />
                <ServiceLoder />
                <ServiceLoder />
              </>

              :
              page?.landPage?.services.map((data, i) => {
                return (
                  <>
                    <div className="card" key={i}>
                      <div className="back_drop"></div>
                      <div className="logo">
                        <Logo className='icon' />
                      </div>
                      <div className="heading">{data.service_img_title}</div>
                      <div className="para">{data.service_img_description.replace(/<[^>]+>/g, '')}</div>
                    </div>
                  </>
                )
              })
          }



        </SkeletonTheme>
      </div>


    </div>
  )
}

export default Services
