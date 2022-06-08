import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import MissionIndex from '../../Component/Tabs/Missionindex'

export default function Mission() {
  return (
    <>
      <div className='container'>
        <h1>Missions</h1>
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
