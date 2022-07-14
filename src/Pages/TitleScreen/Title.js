import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css';

export default function Title() {
  return (
    <>
        {/* <h1>Title Screen</h1> */}
        <div className='container title-container'>
          
          <div className='version-logos'>

            <div className='version-playerid'>

              <div className='version'>
                <span>Version 4.6.0</span>
              </div>
              <div className='player-id'>
                Player ID : Tap to Show
              </div>

            </div>

            <div className='both-logos'>
              <img src='https://seeklogo.com/images/C/criware-logo-A1852745D8-seeklogo.com.gif'
              className='criware'
              />
              <img src='https://i.imgur.com/o8QVZkk.png'
              className='bne'
              />
            </div>

          </div>

          {/* <img src='https://i.imgur.com/qdiYFlU.png' className='title-char' /> */}

          <div className='bottom-pair'>

            <img src='https://i.imgur.com/4YDucoI.png'
            className='logo'
            /><br />

            <Link to='/home' className='touch-screen'>
              Touch Screen
            </Link>

          </div>

          <div className='bottom-text-flex'>
            <div className='bottom-text'>

              <div className='copyright-text'>
                <span>©️BIRD STUDIO/SHUEISHA, TOEI ANIMATION</span><br/>
                <span>©️2018 BANDAI NAMCO Entertainment Inc.</span>
              </div>
              <div className='support-btn'>
                <span>Support</span>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}
