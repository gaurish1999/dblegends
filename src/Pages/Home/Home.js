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

          <Link to='/story' className='story-link'>Story</Link>
          <Link to='/event' className='event-link'>Events</Link>
          <Link to='/top' className='top-link'>Tournament of Power</Link>
          <Link to='/pvp' className='pvp-link'>PvP</Link><br />

          <Link to='/' className='titlescreen-link'>Go to Title Screen</Link>
          <Link to='/menu' className='menu-link'>Menu</Link><br />
        </div>
    </>
  )
}
