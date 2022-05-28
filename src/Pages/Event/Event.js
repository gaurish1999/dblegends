import React from 'react'
import { Link } from 'react-router-dom'
import EventIndex from '../../Component/Tabs/Eventindex'
import './Event.css';

export default function Event() {
  return (
    <>
        {/* <h1>Events</h1> */}
        {/* <hr /> */}
        <Link to='/coop'><img src='https://i.imgur.com/E5UQioW.png' className='coop-banner'/></Link>
        <hr />
        <EventIndex />
        
        <Link to='/home'>Home</Link> 
        <Link to='/mission'>Missions</Link>
        <Link to='/menu'>Menu</Link>
        
    </>
  )
}
