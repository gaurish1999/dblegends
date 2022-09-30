import React from 'react'
import { Link } from 'react-router-dom'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import './Character.css'

export default function Characters() {
  return (
    <>
        <div className='container'>

          <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>

          <div className='team-details'>

            <div className='team-name'>
              <span>Jikogu ike</span>
            </div>

            <Link to='' className='details-btn'>
              <span>Details</span>
            </Link>
            
          </div>

          <div className='powerlvl-bonus'>

            <div className='power-level'>
              <div className='power-level-title'>
                <span>Power Level</span>
              </div>
              <div className='power-level-value'>
                <div className='icon-with-powerlevel'>

                  <div className='scouter'>
                    <span className='power-level'>40,58,262</span>
                  </div>

                </div>
              </div>
            </div>

            <div className='ability-bonus'>
              <div className='ability-bonus-title'>
                <span>Ability Bonus</span>
              </div>
              <div className='ability-bonus-value'>
                <span>3143.10%</span>
              </div>
            </div>

            
          </div>


          <div className='common-links'>
            <Link to='/home' className='home-link-btn'>Home</Link> 
            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>

        </div>
    </>
  )
}
