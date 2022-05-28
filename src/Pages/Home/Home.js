import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import gogeta from '../../Media/Voicelines/ss4-gogeta.mp3';

export default function Home() {

  function play() {
    const voice = new Audio(gogeta);
    voice.play();
  }

  return (
    <>
        {/* <h1>Home</h1> */}
        <div className='container'>

          <div className='sound-effect'>
              <audio id='audio'/>
              <img 
              src='https://i.imgur.com/Bj2Ikdx.png' 
              alt='favorite-character' 
              className='fav-char'
              onClick={play}
              />
            {/* </audio> */}
            
          </div>

          <br />
          <div className='both-link'>
            <div className='links'>
              <Link to='/story' className='story-link link-hover'>Story</Link>
              <Link to='/event' className='event-link link-hover'>Events</Link>
              <Link to='/top' className='top-link link-hover'>T. O. P</Link>
              <Link to='/pvp' className='pvp-link link-hover'>PvP</Link><br />
            </div>

            <div className='common-links'>
              <Link to='/' className='titlescreen-link'>Go to Title Screen</Link>
              <Link to='/menu' className='menu-link'>Menu</Link><br />
            </div>
          </div>
        </div>
    </>
  )
}
