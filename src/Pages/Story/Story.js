import React from 'react'
import Back from '../../Component/Back/Back'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import './Story.css'
import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <>
      <div className='container'>

        <div className='top-three'>
          <Level />
          <Energy />
          <CC />
        </div>

        <div className='main-header-title'>

          <div className='title-text'>
            <span><b>|</b> Main Story</span>
          </div>

          <Link to='' className='story-archive-btn'>
            <span>Story Archive</span>
          </Link>

        </div>
        <hr />
        
        {/* <img src='https://i.imgur.com/KF077Ag.gif' 
        alt='coming soon' 
        className='loading-goku'
        />
        <div className='loading-text'>
          <p>Coming Soon...</p>
        </div> */}
        <div className='story-parts'>
          
          <div className='story-content-div'>
            <img src='https://i.imgur.com/c1AKeJK.png' />
            <div>
              <p>Part14 Showdown! Menacing Assassins</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/pX4xgsU.png' />
            <div>
              <p>Part13 A Clash Against Sinister Gods</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/F4zwb5T.png' />
            <div>
              <p>Part12 Respective Resolves</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/alsL3nq.png' />
            <div>
              <p>Part11 Universe 7 in Turmoil</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/1XSYNdZ.png' />
            <div>
              <p>Part10 The Enemy Steps Forward...</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/BYhci57.png' />
            <div>
              <p>Part9 Shallot and Giblet</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/sW0w8F6.png' />
            <div>
              <p>Part8 Approaching Evil</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/HJEr69Q.png' />
            <div>
              <p>Part7 Reaching Further Heights</p>
            </div>
          </div>

          {/* <div className='story-content-div'>
            <img src='https://i.imgur.com/c1AKeJK.png' />
            <div>
              <p>Lets's go, Legends!</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/c1AKeJK.png' />
            <div>
              <p>Lets's go, Legends!</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/c1AKeJK.png' />
            <div>
              <p>Lets's go, Legends!</p>
            </div>
          </div>

          <div className='story-content-div'>
            <img src='https://i.imgur.com/c1AKeJK.png' />
            <div>
              <p>Lets's go, Legends!</p>
            </div>
          </div> */}
        
        </div>

        <Back />
      </div>
    </>
  )
}
