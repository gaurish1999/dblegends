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
      <div className="">
          {renderTabTitle(
          RECOMMENDED, 
          activeTabName===RECOMMENDED,
            "fas fa-door-open fa-3x", 
            "tab-1"
            )}
            {renderTabTitle(
          UPGRADE,
          activeTabName===UPGRADE,
            "fas fa-tablet-alt fa-3x", 
            "tab-2"
            )}
            {renderTabTitle(
          ORIGINAL_SERIES,
          activeTabName===ORIGINAL_SERIES,
            "fas fa-tags fa-3x", 
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

        {activeTabName === UPGRADE && (
          <section className="tab-content">

              <div className="">
                <div
                  id="tab-2-content" 
                  className={`tab-content-item ${
                  activeTabName === UPGRADE && "show"
                    }`}
                    >
                      <h1>This is Upgrade Tab</h1>
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
                  <h1>This is Originals Tab</h1>
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
                  <h1>This is Specials Tab</h1>
              </div>
            </div>

          </section>
        )}
    </div>
    </>
  );
};

export default EventTabs;