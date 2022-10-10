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

          <div className='characters'>
            <div className='main-char bigger'>
              <video autoPlay muted loop>
                <source src='https://i.imgur.com/I5HrE8V.mp4' type="video/mp4"></source>
              </video>
              {/* <img src='https://i.imgur.com/hpWYV2A.png' /> */}
            </div>
            <div className='team-char smaller'>
              <div><img src='https://i.imgur.com/vubdFfD.png'></img><img src='https://i.imgur.com/JZiJCtc.png'></img></div>
              <div><img src='https://i.imgur.com/xHLbkw2.png'></img></div>
              <div><img src='https://i.imgur.com/NFhSG5c.png'></img></div>
              <div><img src='https://i.imgur.com/hICURNV.png'></img></div>
              <div><img src='https://i.imgur.com/3OBVdj7.png'></img><img src='https://i.imgur.com/mmVctfP.png'></img></div>
              <div><img src='https://i.imgur.com/3OBVdj7.png'></img><img src='https://i.imgur.com/cfxIcjn.png'></img></div>
            </div>
          </div>

          <div className='btns-below-chars'>
            {/* <img src='https://i.imgur.com/hgmFwDP.png'/> */}
            <div className='first-line-btns'>
              <img src='https://i.imgur.com/rdbH0CZ.png' />
              <img src='https://i.imgur.com/YNRKHGx.png' />
              <img src='https://i.imgur.com/bGr0kGw.png' />  
            </div>
            <div className='second-line-btns'>
              <img src='https://i.imgur.com/fjuPwD5.png' />  
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
