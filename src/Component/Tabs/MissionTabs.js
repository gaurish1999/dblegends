import React from 'react';
import {tabLabels} from "./Missionconstant";
// import {Link} from "react-router-dom";
import "./EventTabs.css";

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
      <div className="">
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

    {activeTabName === DAILY && (
      <section className="tab-content">

        <div className="">
          <div id="tab-1-content" 
            className={`tab-content-item ${
            activeTabName === DAILY && "show"
            }`}
            >
              <h1>This is DAILY Tab</h1>
          </div>
        </div>

      </section> 
    )}

    {activeTabName === EVENTS && (
      <section className="tab-content">

          <div className="">
            <div
              id="tab-2-content" 
              className={`tab-content-item ${
              activeTabName === EVENTS && "show"
                }`}
                >
                  <h1>This is EVENTS Tab</h1>
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
              <h1>This is SPECIAL Tab</h1>
          </div>
        </div>

      </section>
    )}
    </>
  );
};

export default MissionTabs;