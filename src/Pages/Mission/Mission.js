import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import MissionIndex from '../../Component/Tabs/Missionindex'

export default function Mission() {
  return (
    <>
      <div className='container'>
        {/* <h1>Missions</h1> */}
        <div className='top-three'>
          <Level />
          <Energy />
          <CC />
        </div>

        <h2>Battle Lover's Plan</h2>

        <h3>Daily Stamp Rally</h3>
        <hr />

        <MissionIndex />
        
    <div className='both-link'>
        <div className='common-links'>
          <Back />
          <Link to='/menu' className='menu-link'>Menu</Link>
        </div>
        </div>
      </div>
    </>
  )
}
