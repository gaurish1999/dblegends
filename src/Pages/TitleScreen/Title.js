import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css';

export default function Title() {
  return (
    <>
        {/* <h1>Title Screen</h1> */}
        <div className='container'>
          
          <div className='logos'>
            <img src='https://seeklogo.com/images/C/criware-logo-A1852745D8-seeklogo.com.gif'
            className='criware'
            />
            <img src='https://i.imgur.com/o8QVZkk.png'
            className='bne'
            />
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
        </div>
    </>
  )
}
