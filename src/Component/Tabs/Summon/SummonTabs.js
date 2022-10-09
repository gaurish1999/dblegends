import React, { useState } from 'react';
import ReactModal from 'react-modal';
import CC from '../../CC/CC';
import {summonLabels} from "./Summonconstant";
import "./SummonTabs.css";

const SummonTabs = ({activeTabName, onClickTab}) => {
    const {ALL, RECOMMENDED, ZENKAI, TICKET} = summonLabels;

    const [cc, setCc] = useState();
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('Chrono Crystals'));
    //     if (cc) {
    //      setCc(cc);
    //     }
    //   }, []);

    const [modal, setModal] = useState(false);
    const [res, setRes] = useState([]);
    
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

    const openModal = () => {
        setModal(true);
    }
    const afterOpenModal = () => {

    }
    const closeModal = () => {
        setModal(false);
    }

    const single_summon = () =>{

        let cc = JSON.parse(localStorage.getItem('Chrono Crystals'));
        cc -= 100;
        console.log(cc);
        openModal();

        const character_list= [
            "PUR UL Legendary Super Saiyan Broly",
            "RED SP LL Fusion Zamasu (Corrupted)",
            "BLU SP LL Buu:Kid",
            "PUR SP LL Super Saiyan Gohan (Youth)",
            "PUR SP LL Super Saiyan Goten (Kid)",
            "BLU SP God of Destruction Beerus",
            "GRN SP Gohan (Kid): Piccolo (Assist)",
            "YEL SP Super Saiyan 2 Caulifla: Kale (Assist)",
            "GRN SP God of Destruction Toppo",
            "YEL SP Majuub",
            "BLU SP Super Saiyan 3 Goku",
            "RED SP Super Saiyan 2 Kefla",
            "PUR SP Super Saiyan God SS Vegito",
            "YEL SP Android #17",
            "BLU SP Android #18",
            "BLU SP Super Saiyan God SS Goku",
            "RED SP Trunks: Mai (Assist)",
            "YEL SP Vegeta",
            "RED SP Final Form Frieza",
            "GRN SP Metal Cooler",
            "PUR SP Super Saiyan Vegeta",
            "GRN SP Goku Black",
            "RED SP Great Saiyaman 1 & 2 (Assist)",
            "RED SP Perfect Form Cell",
            "GRN SP Trunks (Kid)",
            "YEL SP Goten (Kid)",
            "RED SP Dyspo",
            "BLU SP Toppo",
            "GRN SP Jiren",
            "GRN SP Super Saiyan Goku",
            "BLU EX Final Form Cooler",
            "RED EX Turles",
            "GRN EX Dyspo",
            "YEL EX Toppo",
            "BLU EX Fasha",
            "GRN EX Tora",
            "RED EX Mai",
            "GRN EX Final Form Frieza",
            "BLU EX Super Saiyan 2 Gohan (Youth)",
            "PUR EX Yajirobe",
            "YEL HE Mercenary Tao",
            "GRN HE Nail",
            "BLU HE World Champion Hercule",
            "RED HE Videl",
            "BLU HE 2nd Form Cell",
            "BLU HE Krillin",
            "PUR HE Super Saiyan Goku",
            "BLU HE Turles",
            "GRN HE Cell Jr.",
            "RED HE Thouser"
        ];

        var summon_value = 1, max = 49, min = 0, res;
        var arr = [];

        let i = 0;
        while(summon_value-- > 0){

            let diff = max - min;
            let random_number = Math.random();
            random_number = Math.floor(random_number * diff);

            random_number += min;
            arr[i++] = random_number;
        }

        setRes(
            arr.map((arr) => character_list[arr] + "\n")
        )

        setCc(localStorage.setItem('Chrono Crystals', JSON.stringify(cc)))
    }

    const multi_summon = () =>{
        
        let cc = JSON.parse(localStorage.getItem('Chrono Crystals'));
        cc -= 1000;
        console.log(cc);
        openModal();
        // setCc(cc-1000);
        // console.log(cc)
        const character_list= [
            "PUR UL Legendary Super Saiyan Broly",
            "RED SP LL Fusion Zamasu (Corrupted)",
            "BLU SP LL Buu:Kid",
            "PUR SP LL Super Saiyan Gohan (Youth)",
            "PUR SP LL Super Saiyan Goten (Kid)",
            "BLU SP God of Destruction Beerus",
            "GRN SP Gohan (Kid): Piccolo (Assist)",
            "YEL SP Super Saiyan 2 Caulifla: Kale (Assist)",
            "GRN SP God of Destruction Toppo",
            "YEL SP Majuub",
            "BLU SP Super Saiyan 3 Goku",
            "RED SP Super Saiyan 2 Kefla",
            "PUR SP Super Saiyan God SS Vegito",
            "YEL SP Android #17",
            "BLU SP Android #18",
            "BLU SP Super Saiyan God SS Goku",
            "RED SP Trunks: Mai (Assist)",
            "YEL SP Vegeta",
            "RED SP Final Form Frieza",
            "GRN SP Metal Cooler",
            "PUR SP Super Saiyan Vegeta",
            "GRN SP Goku Black",
            "RED SP Great Saiyaman 1 & 2 (Assist)",
            "RED SP Perfect Form Cell",
            "GRN SP Trunks (Kid)",
            "YEL SP Goten (Kid)",
            "RED SP Dyspo",
            "BLU SP Toppo",
            "GRN SP Jiren",
            "GRN SP Super Saiyan Goku",
            "BLU EX Final Form Cooler",
            "RED EX Turles",
            "GRN EX Dyspo",
            "YEL EX Toppo",
            "BLU EX Fasha",
            "GRN EX Tora",
            "RED EX Mai",
            "GRN EX Final Form Frieza",
            "BLU EX Super Saiyan 2 Gohan (Youth)",
            "PUR EX Yajirobe",
            "YEL HE Mercenary Tao",
            "GRN HE Nail",
            "BLU HE World Champion Hercule",
            "RED HE Videl",
            "BLU HE 2nd Form Cell",
            "BLU HE Krillin",
            "PUR HE Super Saiyan Goku",
            "BLU HE Turles",
            "GRN HE Cell Jr.",
            "RED HE Thouser"
        ];
        var summon_value = 10, max = 49, min = 0;
        var arr = [];

        let i = 0;
        while(summon_value-- > 0){

            let diff = max - min;
            let random_number = Math.random();
            random_number = Math.floor(random_number * diff);

            random_number += min;                
            arr[i++] = random_number;
        }
// alert(arr)
        setRes(
            arr.map((arr) => character_list[arr] + " | ")
        )
        setCc(localStorage.setItem('Chrono Crystals', JSON.stringify(cc)))

    }

    const bg_overlay = {
        overlay: {
            background: '#13171acd'
        }
    };

  return (
    <>
        <ReactModal
            isOpen={modal}
            ariaHideApp={false}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Summon Results"
            id='summon-modal'
            style={bg_overlay}
            >
                <div className='summon-modal-bg'>

                    <div className='summon-modal-topline'>
                        <p>Summon Results</p>
                        <button id='close-modal' onClick={closeModal}>×</button>
                    </div>

                    {/* <hr/> */}

                    <div className='summon-modal-res'>{res}</div>
                </div>
        </ReactModal>

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
                          <img src='https://i.imgur.com/tWBq5Gk.png' />

                          <div>
                              <div className='banner-zpower'>Z Power <br/>List</div>
                              <div className='banner-featured'>Featured <br/>Characters</div>
                          </div>
                      </div>

                      <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                      <div className='banner-summon'>

                          <div className='banner-single' onClick={single_summon}>
                              <div>Single Summon</div>
                              <div>100</div>
                          </div>

                          <div className='banner-multi' onClick={multi_summon}>
                              <div>Consecutive Summon</div>
                              <div>1,000</div>
                          </div>
                      </div>
                    </div>

                    <div className='tab-content-div-summon'>

                      <div className='banner-img'>
                          <img src='https://i.imgur.com/TbP44kr.png' />

                          <div>
                              <div className='banner-zpower'>Z Power <br/>List</div>
                              <div className='banner-featured'>Featured <br/>Characters</div>
                          </div>
                      </div>

                      <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                      <div className='banner-summon'>

                          <div className='banner-single'>
                              <div>Single Summon</div>
                              <div>100</div>
                          </div>

                          <div className='banner-multi'>
                              <div>Consecutive Summon</div>
                              <div>1,000</div>
                          </div>
                      </div>
                    </div>

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
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>
                                    {/* <img src='https://pbs.twimg.com/media/Ec9tFq8UwAA6TcM.png' className='cc-img-summon'/> */}
                                    <span>1,000</span>
                                </div>
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
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='tab-content-div-summon'>

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
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
                            </div>
                        </div>
                    </div> */}

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/VU7qfNF.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/NLidvCT.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/63zAadb.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
                            </div>
                        </div>
                    </div>

                    <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/Mc3TwrG.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 12/31/2029 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
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
                  
                  <div className='tab-content-div-summon'>

                    <div className='banner-img'>
                        <img src='https://i.imgur.com/tWBq5Gk.png' />

                        <div>
                            <div className='banner-zpower'>Z Power <br/>List</div>
                            <div className='banner-featured'>Featured <br/>Characters</div>
                        </div>
                    </div>

                    <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                    <div className='banner-summon'>

                        <div className='banner-single'>
                            <div>Single Summon</div>
                            <div>100</div>
                        </div>

                        <div className='banner-multi'>
                            <div>Consecutive Summon</div>
                            <div>1,000</div>
                        </div>
                    </div>
                    </div>

                    <div className='tab-content-div-summon'>

                    <div className='banner-img'>
                        <img src='https://i.imgur.com/TbP44kr.png' />

                        <div>
                            <div className='banner-zpower'>Z Power <br/>List</div>
                            <div className='banner-featured'>Featured <br/>Characters</div>
                        </div>
                    </div>

                    <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                    <div className='banner-summon'>

                        <div className='banner-single'>
                            <div>Single Summon</div>
                            <div>100</div>
                        </div>

                        <div className='banner-multi'>
                            <div>Consecutive Summon</div>
                            <div>1,000</div>
                        </div>
                    </div>
                    </div>

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
                              <div>100</div>
                          </div>

                          <div className='banner-multi'>
                              <div>Consecutive Summon</div>
                              <div>
                                  {/* <img src='https://pbs.twimg.com/media/Ec9tFq8UwAA6TcM.png' className='cc-img-summon'/> */}
                                  <span>1,000</span>
                              </div>
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
                              <div>100</div>
                          </div>

                          <div className='banner-multi'>
                              <div>Consecutive Summon</div>
                              <div>1,000</div>
                          </div>
                      </div>
                    </div>

                    {/* <div className='tab-content-div-summon'>

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
                              <div>100</div>
                          </div>

                          <div className='banner-multi'>
                              <div>Consecutive Summon</div>
                              <div>1,000</div>
                          </div>
                      </div>
                    </div> */}
                 
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
                  
                  <div className='tab-content-div-summon'>

                    <div className='banner-img'>
                        <img src='https://i.imgur.com/VU7qfNF.png' />

                        <div>
                            <div className='banner-zpower'>Z Power <br/>List</div>
                            <div className='banner-featured'>Featured <br/>Characters</div>
                        </div>
                    </div>

                    <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                    <div className='banner-summon'>

                        <div className='banner-single'>
                            <div>Single Summon</div>
                            <div>100</div>
                        </div>

                        <div className='banner-multi'>
                            <div>Consecutive Summon</div>
                            <div>1,000</div>
                        </div>
                    </div>
                    </div>

                    <div className='tab-content-div-summon'>

                    <div className='banner-img'>
                        <img src='https://i.imgur.com/NLidvCT.png' />

                        <div>
                            <div className='banner-zpower'>Z Power <br/>List</div>
                            <div className='banner-featured'>Featured <br/>Characters</div>
                        </div>
                    </div>

                    <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                    <div className='banner-summon'>

                        <div className='banner-single'>
                            <div>Single Summon</div>
                            <div>100</div>
                        </div>

                        <div className='banner-multi'>
                            <div>Consecutive Summon</div>
                            <div>1,000</div>
                        </div>
                    </div>
                    </div>

                    <div className='tab-content-div-summon'>

                    <div className='banner-img'>
                        <img src='https://i.imgur.com/63zAadb.png' />

                        <div>
                            <div className='banner-zpower'>Z Power <br/>List</div>
                            <div className='banner-featured'>Featured <br/>Characters</div>
                        </div>
                    </div>

                    <div className='banner-duration'>End Time: 09/15/2022 11:30 (IST)</div>

                    <div className='banner-summon'>

                        <div className='banner-single'>
                            <div>Single Summon</div>
                            <div>100</div>
                        </div>

                        <div className='banner-multi'>
                            <div>Consecutive Summon</div>
                            <div>1,000</div>
                        </div>
                    </div>
                    </div>

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
                     
                     <div className='tab-content-div-summon'>

                        <div className='banner-img'>
                            <img src='https://i.imgur.com/Mc3TwrG.png' />

                            <div>
                                <div className='banner-zpower'>Z Power <br/>List</div>
                                <div className='banner-featured'>Featured <br/>Characters</div>
                            </div>
                        </div>

                        <div className='banner-duration'>End Time: 12/31/2029 11:30 (IST)</div>

                        <div className='banner-summon'>

                            <div className='banner-single'>
                                <div>Single Summon</div>
                                <div>100</div>
                            </div>

                            <div className='banner-multi'>
                                <div>Consecutive Summon</div>
                                <div>1,000</div>
                            </div>
                        </div>
                    </div>

                </div>
              {/* </div> */}

          </section>
        )}        

    </div>
    </>
  );
};

export default SummonTabs;