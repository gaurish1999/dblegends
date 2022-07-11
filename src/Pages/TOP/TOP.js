import React from 'react'
import Back from '../../Component/Back/Back'
// import CC from '../../Component/CC/CC'
// import Energy from '../../Component/Energy/Energy'
import './TOP.css'
import Level from '../../Component/Level/Level'

export default function TOP() {
  return (
    <>

        <div className='container'>

          <div className='top-three'>
            <Level />
            <p>New Energy</p>
            <p>Score</p>
            {/* <Energy /> */}
            {/* <CC /> */}
          </div>

        <h1>Tournament of Power</h1>
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
