import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';

import { ReactComponent as Customer } from '../../Assets/customer.svg';

import "./NewTestimonials.scss";


const NewTestimonials = ({ sub }) => {

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    infinite: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,

        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };




  return (
    <>
      <div className="tContianer">
        <div className="slider__container" >

          <Slider {...settings} >
            {sub?.landPage?.testimonails.map((data, i) => {
              return (
                <div className="tcards" key={i}>
                  <div className="testimonail-card">
                    <ImQuotesLeft className='icon' />
                    <p>{data?.description.replace(/<(?:.|\n)*?>/gm, '')}</p>
                    <div className='border'></div>
                    <div className="profile">
                      <Customer className='fill' />
                      <div className="data">
                        <h5>{data?.username}</h5>
                        <p>customer</p>
                      </div>
                    </div>
                    <ImQuotesRight className='icon' />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div id='contact'></div>
      </div>
    </>

  );
};

export default NewTestimonials;
