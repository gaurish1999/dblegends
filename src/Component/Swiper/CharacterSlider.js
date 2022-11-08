import React from 'react'
import Slider from 'react-slick';

import './SwiperSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiperdata from './Swiper-data.json';
import './CharacterSlider.css'

export default function CharacterSlider() {
    var char_settings = {
        autoplay: false,
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
      
        <div className="char-swiper">

      {/* <Slider {...char_settings}>
      {Swiperdata.pvp_resources.map((pvp_resources, index) => {

        return (
            <div key={index} className="swiper-slide">

              <img src={pvp_resources.imgurl}
              className="slider-img"
              />
              
            </div>
        );
        })}
      </Slider> */}
        {/* <Slider {...char_settings}> */}
            {Swiperdata.left_char.map((left_char, i) => {
                return (
                    <div key={i} className='left-box'>
                        <video autoPlay muted loop>
                            <source src={left_char.imgurl} type="video/mp4"></source>
                        </video>
                    </div>
                )
            })}
            

            <div className='right-box'>
            <div>
            <img src='https://i.imgur.com/vubdFfD.png'></img>
            <img src='https://i.imgur.com/JZiJCtc.png'></img>
            <div className='eq-1'></div>
            <div className='eq-2'></div>
            <div className='eq-3'></div>
            </div>

            <div>
            <img src="https://i.imgur.com/AEH7phv.png"></img>
            <div className='eq-1'></div>
            <div className='eq-2'></div>
            <div className='eq-3'></div>
            </div>

            <div>
            <img src='https://i.imgur.com/NFhSG5c.png'></img>
            <div className='eq-1'></div>
            <div className='eq-2'></div>
            <div className='eq-3'></div>
            </div>

            <div>
            <img src='https://i.imgur.com/hICURNV.png'></img>
            <div className='eq-1'></div>
            <div className='eq-2'></div>
            <div className='eq-3'></div>
            </div>

            <div>
            <img src='https://i.imgur.com/3OBVdj7.png'></img>
            <img src='https://i.imgur.com/mmVctfP.png'></img>
            <div className='eq-1'></div>
            <div className='eq-2'></div>
            <div className='eq-3'></div>
            </div>

            <div>
            <img src='https://i.imgur.com/3OBVdj7.png'></img>
            <img src='https://i.imgur.com/cfxIcjn.png'></img>
            <div className='eq-1'></div>
            <div className='eq-2'></div>
            <div className='eq-3'></div>
            </div>
            </div>

            {/* </Slider> */}
        </div>
  )
}
