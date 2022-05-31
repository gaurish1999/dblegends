import React from 'react'
import { Link } from 'react-router-dom'
import EventIndex from '../../Component/Tabs/Eventindex'
import './Event.css';

export default function Event() {
  return (
    <>
        {/* <h1>Events</h1> */}
        {/* <hr /> */}
        <div className='container'>
          <Link to='/coop'>
            <div className='coop-div'>
              <img src='https://i.imgur.com/FQZneiK.png' className='coop-banner'/>
            </div>  
          </Link><br/>
          {/* <hr /> */}
          
          <EventIndex />
          
          <div className='bottom-links'>
            <Link to='/home' className='home-link-btn'>Home</Link> 
            <Link to='/mission' className='mission-link-btn'><span className='z'>Z</span> Mission</Link>
            <Link to='/menu' className='menu-link-btn'>Menu</Link>
          </div>
        </div>
    </>
  )
}
