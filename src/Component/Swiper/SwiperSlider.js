import React from 'react'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './SwiperSlider.css'
import Swiperdata from './Swiper-data.json';

export default function SwiperSlider() {

    const swiper = new Swiper('.swiper', {

        // modules: [Navigation, Pagination],
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
        ,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
  return (
    <div>
      <div className="swiper">
    <div className="swiper-wrapper">
      {/* <div className="swiper-slide"> */}
        {Swiperdata.resources.map((resource, index) => {

          return (
              <div key={index} className="swiper-slide">
                  <a className="slider-data">

                      <img src={resource.imgurl}
                      // alt={resource.title}
                      className="slider-img"
                      />
                                      </a>
              </div>
          );
        })}
      {/* </div> */}
    </div>

    <div className="swiper-pagination"></div>
    
    {/* <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div> */}
  </div>
    </div>
  )
}
