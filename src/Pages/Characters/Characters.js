import React from 'react'
import { Link } from 'react-router-dom'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import CharacterSlider from '../../Component/Swiper/CharacterSlider'
import CharTemp from '../../Component/Swiper/Template/CharTemp'
import './Character.css'

import Slider from 'react-slick';

// import './SwiperSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiperdata from '../../Component/Swiper/Swiper-data.json';
// import './CharacterSlider.css'

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        // display: "block", 
        backgroundImage: "radial-gradient(#FA6C00, #FBAF10)", 
        padding: '5px',
        width: '20px',
        marginLeft: '50px', 
        zIndex: '99',
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        backgroundImage: "radial-gradient(#FA6C00, #FBAF10)", 
        padding: '5px',
        width: '20px',
        marginRight: '50px' 
      }}
      onClick={onClick}
    />
  );
}

export default function Characters() {

  var chartemp_settings = {
    autoplay: false,
    arrows: true,
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
        <div className='container'>

          <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>

          <div className='team-details'>

            <div className='team-name'>
              <span>Jikogu ike</span>
            </div>

            <Link to='' className='details-btn'>
              <span>Details</span>
            </Link>
            
          </div>

          <div className='powerlvl-bonus'>

            <div className='power-level'>
              <div className='power-level-title'>
                <span>Power Level</span>
              </div>
              <div className='power-level-value'>
                <div className='icon-with-powerlevel'>

                  <div className='scouter'>
                    <span className='power-level'>40,58,262</span>
                  </div>

                </div>
              </div>
            </div>

            <div className='ability-bonus'>
              <div className='ability-bonus-title'>
                <span>Ability Bonus</span>
              </div>
              <div className='ability-bonus-value'>
                <span>3143.10%</span>
              </div>
            </div>

            
          </div>

          <div className='characters'>

            {/* <CharacterSlider /> */}
            <Slider {...chartemp_settings}>
              {/* {Swiperdata.pvp_resources.map((pvp_resources, index) => {

                return (
                    <div key={index} className="swiper-slide">

                      <img src={pvp_resources.imgurl}
                      className="slider-img"
                      />
                      
                    </div>
                );
                })} */}
                <CharTemp />
                <CharTemp />
                <CharTemp />
                <CharTemp />
                <CharTemp />
                <CharTemp />
            </Slider>
            
          </div>

          <div className='btns-below-chars'>

              <img src='https://i.imgur.com/rdbH0CZ.png' />
              <img src='https://i.imgur.com/YNRKHGx.png' />
              <img src='https://i.imgur.com/bGr0kGw.png' />
            
          </div>

          <div className='second-line-btns'>
              <img src='https://i.imgur.com/fjuPwD5.png' />  
            </div>


          <div className='common-links'>
            <Link to='/home' className='home-link-btn'>Home</Link> 
            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>

        </div>
    </>
  )
}
