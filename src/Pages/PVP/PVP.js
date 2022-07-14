import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../../Component/Back/Back'
import Slider from '../../Component/Slider/Slider';
import './PVP.css'

export default function PVP() {
  return (
    <>
        <div className='container'>

          <div>
            <Link to='' className='info-btn'>
                <span><i className="fa fa-info" aria-hidden="true"></i></span>
            </Link>
          </div><br/><br/>

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
                    <span><i className="fa fa-info" aria-hidden="true"></i></span>
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
                    <span><i className="fa fa-info" aria-hidden="true"></i></span>
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

          <div className='dummy-div'>
            {/* asdsadas */}
          </div>

          <div className='pvp-friendly'>
            <img src='https://imgur.com/ogeWJrL.png' alt='' className='pvp-friendly-img'/>
          </div>

{/* Multi image carousel */}
          <div className='team-selector'>

            <div className='two-things'>

              <div className='name-of-team'>
                <span>Unbeatable</span>
              </div>

              <div className='icon-with-powerlevel'>

                <Link to='' className='info-btn party-form'>
                    <span><i className="fa fa-users" aria-hidden="true"></i></span>
                </Link>

                <div className='scouter'>
                  <span className='power-level'>4,233,378</span>
                </div>
              </div>

            </div>

            <Slider />

            {/* <div className='dummy-div'> */}
              {/* asdsadas */}
            {/* </div> */}

          </div>
{/* -------------------- */}

          <div className='below-teams-btns'>
            <Link to='' className='popular-char-btn season-boost-chars'>
              <span>Battle History</span>
            </Link>
            <Link to='' className='popular-char-btn season-boost-chars'>
              <span>Friend Battle</span>
            </Link>
          </div>

          {/* <img src='https://i.imgur.com/KF077Ag.gif' 
          alt='coming soon' 
          className='loading-goku'
          />
          <div className='loading-text'>
            <span>Coming Soon...</span>
          </div> */}

          <div className='common-links'>
            <Back />

            <Link to='/mission' className='mission-link-btn'>
              <span className='z'>Z</span> Mission
            </Link>

            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>
          
        </div>
    </>
  )
}
