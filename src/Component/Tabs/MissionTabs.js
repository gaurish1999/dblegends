import React from 'react';
import {tabLabels} from "./Missionconstant";
// import {Link} from "react-router-dom";
import "./MissionTabs.css";

const MissionTabs = ({activeTabName, onClickTab}) => {
    const {DAILY, EVENTS, SPECIAL} = tabLabels;
    
    const renderTabTitle = (tabTitle, isActive, icon, id) => (

      <div 
        onClick ={() => onClickTab(tabTitle) } 
        id={id} 
        className={`tab-item ${isActive && "tab-border"}`}
        >
        <i className={icon}></i>
        <p>{tabTitle}</p>
      </div>
    )

  return (
    <>
     <section className="tabs">
      <div className="tab-container-mission">
          {renderTabTitle(
              DAILY, 
              activeTabName===DAILY,
                "fas fa-door-open fa-3x", 
                "tab-1"
                )}
                {renderTabTitle(
              EVENTS,
              activeTabName===EVENTS,
                "fas fa-tablet-alt fa-3x", 
                "tab-2"
                )}
                {renderTabTitle(
              SPECIAL,
              activeTabName===SPECIAL,
                "fas fa-tags fa-3x", 
                "tab-2"
                )}
      </div>
     </section>
<div className='scroll-box'>
    {activeTabName === DAILY && (
      <section className="tab-content">

        <div className="">
          <div id="tab-1-content" 
            className={`tab-content-item ${
            activeTabName === DAILY && "show"
            }`}
            >
              <div className='tab-content-div-mission'>

                <p className='mission-header'>Daily</p>
                <h5 className='mission-objective'>Clear Bonus Battle 1 time(s)</h5>

                <div className='mission-detail'>

                  <div className='mission-detail-img-details'>
                    {/* <div className='rwd'> */}
                      <img src='https://i.imgur.com/I86xMd8.png' />
                      <p>x10</p>
                    {/* </div> */}

                    {/* <div className='rwd'>
                      <img src='https://i.imgur.com/I86xMd8.png' />
                      <p>x1,000</p>
                    </div>

                    <div className='rwd'>
                      <img src='https://i.imgur.com/I86xMd8.png' />
                      <p>x1,000</p>
                    </div> */}
                  </div>

                  
                  <div className='progress-go-btn'>
                    <div className='mission-progress'></div>
                    <button>Challenge</button>
                  </div>

                </div>

                </div>
              <div className='tab-content-div-mission'>

                <p className='mission-header'>Daily</p>
                <h5 className='mission-objective'>Embark on an Adventure 1 time(s)</h5>

                <div className='mission-detail'>

                  <div className='mission-detail-img-details'>
                    <img src='https://i.imgur.com/I86xMd8.png' />
                    <p>x5</p>
                  </div>

                  
                  <div className='progress-go-btn'>
                    <div className='mission-progress'></div>
                    <button>Challenge</button>
                  </div>

                </div>

                </div>

              <div className='tab-content-div-mission'>

                <p className='mission-header'>Daily</p>
                <h5 className='mission-objective'>Use 5 Energy</h5>

                <div className='mission-detail'>

                  <div className='mission-detail-img-details'>
                    <img src='https://i.imgur.com/I86xMd8.png' />
                    <p>x5</p>
                  </div>

                  
                  <div className='progress-go-btn'>
                    <div className='mission-progress'></div>
                    <button>Challenge</button>
                  </div>

                </div>

              </div>

              <div className='tab-content-div-mission'>

                <p className='mission-header'>Daily</p>
                <h5 className='mission-objective'>Use 10 Energy</h5>

                <div className='mission-detail'>

                  <div className='mission-detail-img-details'>
                    <img src='https://i.imgur.com/I86xMd8.png' />
                    <p>x5</p>
                  </div>

                  
                  <div className='progress-go-btn'>
                    <div className='mission-progress'></div>
                    <button>Challenge</button>
                  </div>

                </div>

              </div>

              <div className='tab-content-div-mission'>

                <p className='mission-header'>Daily</p>
                <h5 className='mission-objective'>Play PvP, Raids or Hyperdimensional Co-Op 1 time(s)</h5>

                <div className='mission-detail'>

                  <div className='mission-detail-img-details'>
                    <img src='https://i.imgur.com/I86xMd8.png' />
                    <p>x10</p>
                  </div>

                  
                  <div className='progress-go-btn'>
                    <div className='mission-progress'></div>
                    <button>Challenge</button>
                  </div>

                </div>

              </div>

              <div className='tab-content-div-mission'>

                <p className='mission-header'>Daily</p>
                <h5 className='mission-objective'>Complete Daily Missions</h5>

                <div className='mission-detail'>

                  <div className='mission-detail-img-details'>
                    <img src='https://i.imgur.com/I86xMd8.png' />
                    <p>x500</p>
                  </div>

                  
                  <div className='progress-go-btn'>
                    <div className='mission-progress'></div>
                    <button>Challenge</button>
                  </div>

                </div>

              </div>


          </div>
        </div>

      </section> 
    )}

    {activeTabName === EVENTS && (
      <section className="tab-content">

          <div className="">
            <div id="tab-2-content" 
              className={`tab-content-item ${
              activeTabName === EVENTS && "show"
                }`}
                >
              <div className='tab-content-div-mission'>

                <div className='mission-detail'>

                  <div className='banner-image'>
                    <img src='https://i.imgur.com/JD198ij.png' />
                  </div>

                  <div className='banner-title'>
                    <p>Thanks for 4 Years!<br/>
                      Anniversary Special Missions
                    </p>
                  </div>

                </div>

              </div>
              <div className='tab-content-div-mission'>

                <div className='mission-detail'>

                  <div className='banner-image'>
                    <img src='https://i.imgur.com/u1GIzyI.png' />
                  </div>

                  <div className='banner-title'>
                    <p>Anniversary Special!!<br/>Hyperdimensional Co-Op</p>
                  </div>

                </div>

              </div>
              <div className='tab-content-div-mission'>

                <div className='mission-detail'>

                  <div className='banner-image'>
                    <img src='https://i.imgur.com/7uk5hQX.png' />
                  </div>

                  <div className='banner-title'>
                    <p>Monthly Missions</p>
                  </div>

                </div>

              </div>
              <div className='tab-content-div-mission'>

                <div className='mission-detail'>

                  <div className='banner-image'>
                    <img src='https://i.imgur.com/O1pds4u.png' />
                  </div>

                  <div className='banner-title'>
                    <p>Tornament of Power </p>
                  </div>

                </div>

              </div>
              <div className='tab-content-div-mission'>

                <div className='mission-detail'>

                  <div className='banner-image'>
                    <img src='https://i.imgur.com/Szuur5d.png' />
                  </div>

                  <div className='banner-title'>
                    <p>Who's the 4th Anniversary's Strongest Fighter?! Anniversay Super Space-Time Duel</p>
                  </div>

                </div>

              </div>
              <div className='tab-content-div-mission'>

                <div className='mission-detail'>

                  <div className='banner-image'>
                    <img src='https://i.imgur.com/iTV0AOv.png' />
                  </div>

                  <div className='banner-title'>
                    <p>[Super Saiyan God SS Vegito (DBL24-01S)] Awakening Z Power Missions</p>
                  </div>

                </div>

              </div>
              

              </div>
          </div>

      </section>
    )}

    {activeTabName === SPECIAL && (
      <section className="tab-content">

        <div className="">
          <div id="tab-3-content" 
            className={`tab-content-item ${
            activeTabName === SPECIAL && "show"
              }`}
            >
              <h1>SPECIAL Missions</h1>
          </div>
        </div>

      </section>
    )}
    </div>
    </>
  );
};

export default MissionTabs;