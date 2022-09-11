import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import SummonIndex from '../../Component/Tabs/Summon/Summonindex'

export default function Summon() {
  return (
    <>
        {/* <h1>Summons</h1> */}
        <div className='container'>

          <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>

          <SummonIndex />

          <div className='common-links'>
            <Link to='/home' className='home-link-btn'>Home</Link> 
            <Back />
          </div>



         </div>
    </>
  )
}
