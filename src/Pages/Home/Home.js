import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import gogeta from '../../Media/Voicelines/ss4-gogeta.mp3';
import Level from '../../Component/Level/Level';
import Energy from '../../Component/Energy/Energy';
import CC from '../../Component/CC/CC';

export default function Home() {

  function play() {
    const voice = new Audio(gogeta);
    voice.play();
  }

  return (
    <>
        {/* <h1>Home</h1> */}
        <div className='container'>

        <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>

          <div className='sound-effect'>
              <audio id='audio'/>
              <img 
              src='https://i.imgur.com/MDYuWS8.png' 
              alt='favorite-character' 
              className='fav-char'
              onClick={play}
              />
            {/* </audio> */}
            
          </div>

          <br />
          <div className='both-link'>
            <div className='links'>
              {/* <Link to='/story' className='story-link link-hover'>Story</Link>
              <Link to='/event' className='event-link link-hover'>Events</Link>
              <Link to='/top' className='top-link link-hover'>TOP</Link>
              <Link to='/pvp' className='pvp-link link-hover'>PvP</Link> */}
              <Link to='/story' className='story-link link-hover'>
                <img src='https://i.imgur.com/eE5NYlz.png' alt='story' />
              </Link>
              <Link to='/event' className='event-link link-hover'>
                <img src='https://i.imgur.com/H2XHBXk.png' alt='event' />
              </Link>
              <Link to='/top' className='top-link link-hover'>
                <img src='https://i.imgur.com/oFkO9OL.png' alt='top' />
              </Link>
              <Link to='/pvp' className='pvp-link link-hover'>
                <img src='https://i.imgur.com/LJ5x3ls.png' alt='pvp' />
              </Link>
            </div>

            <div className='common-links'>
              <Link to='/' className='titlescreen-link'>Title</Link>
              <Link to='/menu' className='menu-link'>Menu</Link><br />
            </div>
          </div>
        </div>
    </>
  )
}
