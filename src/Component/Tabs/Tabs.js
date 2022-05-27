import React from 'react';
import {tabLabels} from "./constant";
import {Link} from "react-router-dom";
import "./Tabs.css";

const Tabs = ({activeTabName, onClickTab}) => {
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
      <div className="container">
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

    {activeTabName === RECOMMENDED && (
      <section className="tab-content">

        <div className="container">
          <div id="tab-1-content" 
            className={`tab-content-item ${
            activeTabName === RECOMMENDED && "show"
            }`}
            >
              <h1>This is Recommended Tab</h1>
          </div>
        </div>

      </section> 
    )}

    {activeTabName === UPGRADE && (
      <section className="tab-content">

          <div className="container">
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
        <div className="container">
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

        <div className="container">
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
    </>
  );
};

export default Tabs;