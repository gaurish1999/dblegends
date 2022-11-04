import React from 'react'
import Slider from 'react-slick';

import './SwiperSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiperdata from './Swiper-data.json';

export default function SwiperSlider() {

      var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
      
      <div className="swiper">

      <Slider {...settings}>
      {Swiperdata.resources.map((resource, index) => {

        return (
            <div key={index} className="swiper-slide">

              <img src={resource.imgurl}
              className="slider-img"
              />
              
            </div>
        );
        })}
      </Slider>
  </div>
  
    </div>
  )
}
