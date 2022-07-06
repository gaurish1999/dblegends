import React from 'react'
import { Link } from 'react-router-dom'
import CC from '../../Component/CC/CC';
import Energy from '../../Component/Energy/Energy';
import Level from '../../Component/Level/Level';
import EventIndex from '../../Component/Tabs/Eventindex'
import './Event.css';

export default function Event() {
  return (
    <>
        {/* <h1>Events</h1> */}
        {/* <hr /> */}
        <div className='container'>

          <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>
          {/* <hr/> */}
          <Link to='/coop'>
            <div className='coop-div'>
              <img src='https://i.imgur.com/4VHVQey.png' className='coop-banner'/>
            </div>  
          </Link><br/>
          {/* <hr /> */}
          
          <EventIndex />
          
          <div className='bottom-links'>
            <Link to='/home' className='home-link-btn'>Home</Link> 
            <Link to='/mission' className='mission-link-btn'><span className='z'>Z</span> Mission</Link>
            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>
        </div>
    </>
  )
}
