import React from 'react';
import {summonLabels} from "./Summonconstant";
import {Link} from "react-router-dom";
import "./SummonTabs.css";

const SummonTabs = ({activeTabName, onClickTab}) => {
    const {ALL, RECOMMENDED, ZENKAI, TICKET} = summonLabels;
    
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
            ALL,
            activeTabName===ALL,
                "", 
                "tab-1"
        )}

        {renderTabTitle(
        RECOMMENDED, 
        activeTabName===RECOMMENDED,
        "", 
        "tab-2"
        )}

        {renderTabTitle(
        ZENKAI,
        activeTabName===ZENKAI,
        "", 
        "tab-3"
        )}

        {renderTabTitle(
        TICKET,
        activeTabName===TICKET,
        "", 
        "tab-4"
        )}            

      </div>
     </section>

      <div className='scroll-box-summon'>

        {activeTabName === ALL && (
          <section className="tab-content">
            
              <div id="tab-1-content" 
                className={`tab-content-item ${
                activeTabName === ALL && "show"
                  }`}
                >
                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/CeLiarF.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 31/11/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>CC</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>CC</div>
                            </div>
                        </div>
                    </div>

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/wW1tKOg.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 09/20/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>CC</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>CC</div>
                            </div>
                        </div>
                    </div>

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/Xt0OIsz.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>CC</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>CC</div>
                            </div>
                        </div>
                    </div>

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/NCcT0Vd.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>CC</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>CC</div>
                            </div>
                        </div>
                    </div>


              </div>

          </section>
        )}

        {activeTabName === RECOMMENDED && (
          <section className="tab-content">

            {/* <div className=""> */}
              <div id="tab-2-content" 
                className={`tab-content-item ${
                activeTabName === RECOMMENDED && "show"
                }`}
                >
                  

                 
              </div>
            {/* </div> */}

          </section> 
        )}

        {activeTabName === ZENKAI && (
          <section className="tab-content">
            {/* <div className=""> */}
              <div id="tab-3-content" 
                className={`tab-content-item ${
                activeTabName === ZENKAI && "show"
                  }`}
                >
                  
              </div>
            {/* </div> */}
          </section>
        )}

        {activeTabName === TICKET && (
          <section className="tab-content">

              {/* <div className=""> */}
                <div id="tab-4-content" 
                  className={`tab-content-item ${
                  activeTabName === TICKET && "show"
                    }`}
                    >
                     
                </div>
              {/* </div> */}

          </section>
        )}        

    </div>
    </>
  );
};

export default SummonTabs;