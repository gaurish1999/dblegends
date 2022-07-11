import React from 'react'
import Back from '../../Component/Back/Back'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import './Story.css'

export default function Story() {
  return (
    <>
      <div className='container'>

        <div className='top-three'>
          <Level />
          <Energy />
          <CC />
        </div>

        <h1>Story</h1>
        <hr />
        
        <img src='https://i.imgur.com/KF077Ag.gif' 
        alt='coming soon' 
        className='loading-goku'
        />
        <div className='loading-text'>
          <p>Coming Soon...</p>
        </div>

        <Back />
      </div>
    </>
  )
}
