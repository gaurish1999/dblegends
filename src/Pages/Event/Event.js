import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import TabComponent from '../../Component/Tabs'
import Coop from '../Coop/Coop'
import Mission from '../Mission/Mission'
import './Event.css';

export default function Event() {
  return (
    <>
        {/* <h1>Events</h1> */}
        {/* <hr /> */}
        <Link to='/coop'><img src='https://i.imgur.com/E5UQioW.png' className='coop-banner'/></Link>
        <hr />
        <TabComponent />
        <Mission />
        <Back />
    </>
  )
}
