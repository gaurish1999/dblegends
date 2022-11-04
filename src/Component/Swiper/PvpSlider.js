import React from 'react'
import Slider from 'react-slick';

import './SwiperSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiperdata from './Swiper-data.json';

export default function PvpSlider() {
    var pvp_settings = {
        autoplay: false,
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };

  return (
    <div>
      
      <div className="pvp-swiper">

      <Slider {...pvp_settings}>
      {Swiperdata.pvp_resources.map((pvp_resources, index) => {

        return (
            <div key={index} className="swiper-slide">

              <img src={pvp_resources.imgurl}
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
