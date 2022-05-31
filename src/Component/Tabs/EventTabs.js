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
                    <img src='https://i.imgur.com/eGAjfj2.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/rrhyzxV.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/SHpyvAX.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/Gb45izc.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/aLDcxKJ.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/KiQ1muU.png' />
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
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/MgwTVJu.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/8RF3gAH.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/rPXVhsU.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/2JmlFeI.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/xgsTM5g.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/9BRFPT1.png' />
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
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/uxYM431.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/h6iv7aI.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/Ce14KFY.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/7ifDb6y.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/2Jlr2nn.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/aVCVs6N.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/chzkvfi.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/1AhdMKE.png' />
                      </div>
                      <div className='tab-content-div'>
                        <img src='https://i.imgur.com/3qBeq1v.png' />
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
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/pRBYipr.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/Fiq6xBc.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/2URMLY1.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/B2XjP7d.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/XOE6X0q.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/6uHzOVh.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/fkwheM9.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/58Metb4.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/adxZ5H2.png' />
                  </div>
                  <div className='tab-content-div'>
                    <img src='https://i.imgur.com/SlwtzUJ.png' />
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