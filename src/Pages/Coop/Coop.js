import React from 'react'
import { Link } from 'react-router-dom';
import Back from '../../Component/Back/Back'
import CC from '../../Component/CC/CC';
import Energy from '../../Component/Energy/Energy';
import Level from '../../Component/Level/Level';
import ExchangeShop from '../ExchangeShop/ExchangeShop'
import Menu from '../Menu/Menu'
import './Coop.css';

export default function Coop() {
  return (
    <>
      <div className='container'>

          <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>

          <div className='above-coop-banner'>

            <div className='time-rem-btn'>
              <span>6 day(s) left</span>
            </div>

            <Link to='/exchangeshop' className='exchange-btn'>
              <img src='https://i.imgur.com/VuoSMU9.png' alt='' />
              <span>Exchange Shop</span>
            </Link>
            
            <Link to='' className='popular-char-btn'>
              {/* <img src='https://i.imgur.com/VuoSMU9.png' alt='' /> */}
              <span>Popular Characters</span>
            </Link>

            <Link to='' className='info-btn'>
              {/* <img src='https://i.imgur.com/VuoSMU9.png' alt='' /> */}
              <span>i</span>
            </Link>

          </div>

          <div className='coop-banner'>
            <img 
            src='https://i.imgur.com/4VHVQey.png' 
            />
          </div>

          <div className='below-coop-banner'>

            <div className='coop-medal-btn'>
              <img src='https://i.imgur.com/WREYHGF.png' className='below-coop-banner-icons' alt='coop-medal'/>
              <span>921</span>
            </div>

            <div className='anni-medal-btn'>
            <img src='https://i.imgur.com/2xwQnGm.png' className='below-coop-banner-icons' alt='coop-medal'/>
              <span>115</span>
            </div>

            <div className='prem-coop-medal-btn'>
            <img src='https://i.imgur.com/CgyisPq.png' className='below-coop-banner-icons' alt='coop-medal'/>
              <span>26</span>
            </div>

          </div>

          <div className='difficulty-banners scroll-box'>

            <div className='Extreme'>
              <div className='Extrene-banner banner'>
                <img src='https://i.imgur.com/DY9pphH.png' className='boss-img'/>
                  <div className='banner-div'>
                    <p className='difficulty-label'>VS Buu: Kid Extreme</p>
                  </div>
              </div>
            </div>

            <div className='Advanced'>
              <div className='Advanced-banner banner'>
                <img src='https://i.imgur.com/DY9pphH.png' className='boss-img'/>
                  <div className='banner-div'>
                    <p className='difficulty-label'>VS Buu: Kid Advance</p>
                  </div>
              </div>
            </div>

            <div className='intermediate'>
              <div className='intermediate-banner banner'>
                <img src='https://i.imgur.com/DY9pphH.png' className='boss-img'/>
                  <div className='banner-div'>
                    <p className='difficulty-label'>VS Buu: Kid Intermediate</p>
                  </div>
              </div>
            </div>

            <div className='Beginner'>
              <div className='Beginner-banner banner'>
                <img src='https://i.imgur.com/DY9pphH.png' className='boss-img'/>
                  <div className='banner-div'>
                    <p className='difficulty-label'>VS Buu: Kid Beginner</p>
                  </div>
              </div>
            </div>

          </div>

          {/* <Menu /> */}
          <div className='common-links'>
            {/* <Link to='/home' className='home-link-btn'>Home</Link>  */}
            <Back />
            <Link to='' className='join-with-frd'>Join with a Code</Link>
            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>
          {/* <div className='home-btn-flex'>
            <Link to='/menu' className='menu-link'>Menu</Link>
          </div> */}

      </div>
    </>
  )
}
