import React from 'react'
import "./NewTestimonials.scss";
import { FaQuoteLeft } from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bounce from 'react-reveal/Bounce';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import customer from "../../Assets/customer.svg"



const arr = [
  {
    para: "I highly recommend their service to anyone who needs carpenter ant treatment.",
    bio: "Shawn Potters",
    data: "Customer",
  },
  {
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: "CLIENT 1",
    data: "Customer",
  },
  {
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: "CLIENT 2",
    data: "Customer",
  },

];

const NewTestimonials = () => {

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
            {arr.map((data, i) => {
              return (
                <div className="tcards" key={i}>
                  <div className="testimonail-card">
                    <ImQuotesLeft className='icon' />
                    <p>{data.para}</p>
                    <div className='border'></div>
                    <div className="profile">
                      <img src={customer} alt="" />
                      <div className="data">
                        <h5>{data.bio}</h5>
                        <p>{data.data}</p>
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
