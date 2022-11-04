import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Back from '../../Component/Back/Back'
import Slider from '../../Component/Slider/Slider';
import PvpSlider from '../../Component/Swiper/PvpSlider';
import './PVP.css'

export default function PVP() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var present_date =  new Date();
  
    var present_day = present_date.getDate();
    var present_month = present_date.getMonth();
    var present_year = present_date.getFullYear();
    // var present_time_hours = present_date.getHours();
    // var present_time_mins = present_date.getMinutes();
  
    // var ending_day = present_date.getDate();
    // var ending_month = present_date.getMonth();
    // var ending_year = present_date.getFullYear();
    // var ending_time = present_date.getTime();
    // alert(present_date.get)
    // alert(present_day+"/" +present_month+ "/" +present_year + " | " + present_time_hours + ":" + present_time_mins);
  
   
  
    if(present_date.getDay() == 3){

      setStartdd(present_day);
      setStartmm(months[present_month]);
      setStartyyy(present_year);
      setSstd(sstd + 1);

      present_date.setDate(present_date.getDate() + 14);
      var reset_date = (present_date.toDateString());
      // alert(reset_date);
      

      // console.log(reset_date.substring(4, 7));
      // console.log(reset_date.substring(8, 11));
      // console.log(reset_date.substring(11, 16));

      setEnddd(reset_date.substring(4, 7))
      setEndmm(reset_date.substring(8, 10))
      setEndyyy(reset_date.substring(11, 16))


      
    }
    else{
      
      console.log("Today is not reset day")
      
    }
  
   
  }, [])

  const [sstd, setSstd] = useState(83);
  
  // const [today, setToday] = useState(present_date);

  const [startdd, setStartdd]= useState(5);
  const [startmm, setStartmm]= useState(months[9]);
  const [startyyyy, setStartyyy]= useState(2022);
  // const [starthours, setStarthours]= useState(present_time_hours);
  // const [startmins, setStartmins]= useState(present_time_mins);
 
  const [enddd, setEnddd]= useState(19);
  const [endmm, setEndmm]= useState(months[9]);
  const [endyyyy, setEndyyy]= useState(2022);
  // const [endtime, setEndtime]= useState();

  return (
    <>
        <div className='container'>

          <div>
           
          </div><br/><br/>

          <div className='season-desc'>
            <span>Super Space-Time Duel #{sstd}</span>
            <Link to='' className='info-btn'>
                <span><i className="fa fa-info" aria-hidden="true"></i></span>
            </Link>
          </div>

          <div className='season-period'>
            <span>{startmm} {startdd}, {startyyyy} - {enddd} {endmm}, {endyyyy}</span>
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
              </div>
              
              <div className='season-ranking-board-row'>
                <div className='rank-heading'>                 
                  <span>Top World</span>
                </div>

                <div className='rank'>                  
                  <span>No rank</span>
                </div>
              </div>

              <hr/>

              <div className='season-ranking-board-row'>
                <div className='rank-rp'>
                  <span>Group A</span>
                </div>
                <div className='rank'>
                  <span>4</span>
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

              <div className='ranking-rwd-world'>
                <span>Top World</span>
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

              <div className='ranking-rwd-world'>
                <span>Group</span>
              </div>
              <div className='battle-rank-rewards'>

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

                <Link to='/characters' className='info-btn party-form'>
                    <span><i className="fa fa-users" aria-hidden="true"></i></span>
                </Link>

                <div className='scouter'>
                  <span className='power-level'>4,233,378</span>
                </div>
              </div>

            </div>

            {/* <Slider /> */}
            <PvpSlider />

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

          <Link to='/mission' className='mission-link-btn'>
              <span className='z'>Z</span> Mission
          </Link>

          <div className='common-links'>
            <Back />            

            <Link to='/menu' className='menu-link'>Menu</Link>
          </div>
          
        </div>
    </>
  )
}
