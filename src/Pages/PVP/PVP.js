import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../../Component/Back/Back'
import './PVP.css'

export default function PVP() {
  return (
    <>
        <div className='container'>

          <Link to='' className='info-btn'>
              <span>i</span>
          </Link><br/><br/>

          <div className='season-desc'>
            <span>Who's the 4th Anniversary's Strongest Fighter?! Anniversay Super Space-Time Duel Season 2</span>
          </div>

          <div className='season-period'>
            <span>6/29/2022 15:30(IST)-7/20/2022 7:30(IST)</span>
          </div>

          <div className='godtube'>
            <img src='https://i.imgur.com/x6M2T5G.png' alt='godtube' className='godtube-img' />
          </div>

          <div className='season-boost-chars-flex'>
            <Link to='' className='popular-char-btn season-boost-chars'>
              <span>Boost Characters</span>
            </Link>
          </div>

          <div className='season-ranking'>
            
            <div className='left-ranking-box'>

              <div className='season-ranking-board-row'>
                <div className='rank-heading'>
                  <span>Ranking</span>
                  <Link to='' className='info-btn'>
                    <span>i</span>
                  </Link>
                </div>

                <div className='rank'>
                  <span>No rank</span>
                </div>
              </div>

              <hr/>

              <div className='season-ranking-board-row'>
                <div className='rank-rp'>
                  <span>RP</span>
                </div>
                <div className='rank'>
                  <span>10,425</span>
                </div>
              </div>

              <hr/>

              <div className='season-ranking-board-row'>
                <div className='battle-rank'>
                  <span>Battle Rank</span>
                </div>
                <div className='rank'>
                  <span>59</span>
                </div>
              </div>

            </div>

            <div className='right-ranking-box'>

              <div className='season-ranking-board-row'>
                <div className='ranking-rwd'>
                  <span>Ranking Reward</span>
                </div>

                <Link to='' className='info-btn'>
                    <span>i</span>
                  </Link>
              </div>

              <div className='battle-rank-rewards'>

                <div className='rwd-item'>
                  <img src='https://i.imgur.com/oT8dU15.png' alt='rare-medal'/>
                  <span>x500</span>
                </div>

                <div className='rwd-item'>
                  <img src='https://pbs.twimg.com/media/Ec9tFq8UwAA6TcM.png' alt='chrono-crystal' />
                  <span>x600</span>
                </div>

              </div>

            </div>

          </div>
          {/* <div className='dummy-layer'></div> */}

          <div className='pvp-friendly'>
            
          </div>

          <div className='team-selector'>
            
          </div>

          <div className='below-teams-btns'>
            
          </div>

          <div className='z-mission-div'>
            
          </div>


          {/* <img src='https://i.imgur.com/KF077Ag.gif' 
          alt='coming soon' 
          className='loading-goku'
          />
          <div className='loading-text'>
            <span>Coming Soon...</span>
          </div> */}

          <div className='bottom-links'>
            {/* <Link to='/home' className='home-link-btn'>Home</Link>  */}
            <Back />
            {/* <Link to='' className='join-with-frd'>Join with a Code</Link> */}
            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>
          
        </div>
    </>
  )
}
