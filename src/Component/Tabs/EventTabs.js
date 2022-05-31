import React from 'react';
import {tabLabels} from "./Eventconstant";
import {Link} from "react-router-dom";
import "./EventTabs.css";

const EventTabs = ({activeTabName, onClickTab}) => {
    const {RECOMMENDED, ORIGINAL_SERIES, UPGRADE, SPECIAL} = tabLabels;
    
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
      <div className="tab-container">
          {renderTabTitle(
          RECOMMENDED, 
          activeTabName===RECOMMENDED,
            "", 
            "tab-1"
            )}
            {renderTabTitle(
          ORIGINAL_SERIES,
          activeTabName===ORIGINAL_SERIES,
            "og-series", 
            "tab-2"
            )}
            {renderTabTitle(
          UPGRADE,
          activeTabName===UPGRADE,
            "", 
            "tab-2"
            )}
            
            {renderTabTitle(
          SPECIAL,
          activeTabName===SPECIAL,
            "", 
            "tab-2"
            )}
      </div>
     </section>

      <div className='scroll-box'>
        {activeTabName === RECOMMENDED && (
          <section className="tab-content">

            <div className="">
              <div id="tab-1-content" 
                className={`tab-content-item ${
                activeTabName === RECOMMENDED && "show"
                }`}
                >
                  

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/rrhyzxV.png' />
                      <div>
                        <p>The Greatest Showdown! A Transcendent Limit Break!</p>
                      </div>
                  </div>

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/eGAjfj2.png' />
                    <div>
                      <p>Let's Go! Universe 7!</p>
                    </div>
                  </div>

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/SHpyvAX.png' />
                    <div>
                      <p>Extreme Battle! - Get Incredible Rewards By clearing One Stage Each Day!! -</p>
                    </div>
                  </div>

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/YDCxYbY.png' />
                    <div>
                      <p>Play every day and get Z Power</p>
                    </div>
                  </div>

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/Gb45izc.png' />
                    <div>
                      <p>Collect Rush Medals and exchange them for Awakening Z Power and lots of other items!</p>
                    </div>
                  </div>

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/aLDcxKJ.png' />
                    <div>
                      <p>Play every day and get Z Power</p>
                    </div>
                  </div>

                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/KiQ1muU.png' />
                    <div>
                      <p>Fight your way to the end! Clear stages and get up to 700 Chrono Crystals!</p>
                    </div>
                  </div>
              </div>
            </div>

          </section> 
        )}

        {activeTabName === ORIGINAL_SERIES && (
          <section className="tab-content">
            <div className="">
              <div
                id="tab-3-content" 
                className={`tab-content-item ${
                activeTabName === ORIGINAL_SERIES && "show"
                  }`}
                >
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/h3P5xYh.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Z Power</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/MgwTVJu.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Z Power</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/8RF3gAH.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Awakening Z Power</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/rPXVhsU.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Awakening Z Power</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/2JmlFeI.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Awakening Z Power</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/xgsTM5g.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Awakening Z Power</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/9BRFPT1.png' />
                    <div>
                      <p>Clear Events from the Oiginal Series to get Chrono Crystals and Awakening Z Power</p>
                    </div>
                  </div>
              </div>
            </div>
          </section>
        )}

        {activeTabName === UPGRADE && (
          <section className="tab-content">

              <div className="">
                <div
                  id="tab-2-content" 
                  className={`tab-content-item ${
                  activeTabName === UPGRADE && "show"
                    }`}
                    >
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/9265xNU.png' />
                        <div>
                          <p>Train with Goku every day to get experience and Friendship Points!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/uxYM431.png' />
                        <div>
                          <p>Equipment Collection</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/h6iv7aI.png' />
                        <div>
                          <p>Get lots of experience!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/Ce14KFY.png' />
                        <div>
                          <p>Get lots of Zeni!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/7ifDb6y.png' />
                        <div>
                          <p>Get RED boost materials!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/2Jlr2nn.png' />
                        <div>
                          <p>Get YEL boost materials!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/aVCVs6N.png' />
                        <div>
                          <p>Get PUR boost materials!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/chzkvfi.png' />
                        <div>
                          <p>Get GRN boost materials!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/1AhdMKE.png' />
                        <div>
                          <p>Get BLU boost materials!</p>
                        </div>
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/3qBeq1v.png' />
                        <div>
                          <p>Get lots of Zenkai Souls!</p>
                        </div>
                      </div>
                  </div>
              </div>

          </section>
        )}
        
        {activeTabName === SPECIAL && (
          <section className="tab-content">

            <div className="">
              <div
                id="tab-4-content" 
                className={`tab-content-item ${
                activeTabName === SPECIAL && "show"
                  }`}
                >
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/c1AKeJK.png' />
                    <div>
                      <p>Lets's go, Legends!</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/pRBYipr.png' />
                    <div>
                      <p>Fusion Reborn: Super Gogeta</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/Fiq6xBc.png' />
                    <div>
                      <p>Legends Road - Piccolo: Kami - </p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/2URMLY1.png' />
                    <div>
                      <p>Legends Road - Goku (Youth) - </p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/B2XjP7d.png' />
                    <div>
                      <p>Legends Road - Trunks (Youth) - </p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/XOE6X0q.png' />
                    <div>
                      <p>Legends Road - Gotenks - </p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/6uHzOVh.png' />
                    <div>
                      <p>LL Fierce Battle! Let's finish this! Family Kamehameha!!</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/fkwheM9.png' />
                    <div>
                      <p>Goku The Legendary Super Saiyan</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/58Metb4.png' />
                    <div>
                      <p>Vegeta, Prince of All Saiyans - Rebellion Against Frieza! -</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/adxZ5H2.png' />
                    <div>
                      <p>Behold... One Body with the Power of Seven!</p>
                    </div>
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/SlwtzUJ.png' />
                    <div>
                      <p>Eliminate the Earthlings</p>
                    </div>
                  </div>
              </div>
            </div>

          </section>
        )}
    </div>
    </>
  );
};

export default EventTabs;