import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import gogeta from '../../Media/Voicelines/ss4-gogeta.mp3';
import Level from '../../Component/Level/Level';
import Energy from '../../Component/Energy/Energy';
import CC from '../../Component/CC/CC';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

export default function Home() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  function play() {
    const voice = new Audio(gogeta);
    voice.play();
  }

  return (
    <>
        {/* <h1>Home</h1> */}
        <div className='container home-container'>

          <div className='top-three'>
            <Level />
            <Energy />
            <CC />
          </div>

          <div className='top-caraousel'>
            <span>
              <Carousel breakPoints={breakPoints}>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
              </Carousel>
            </span>
          </div>

          <div className='extra-icons'>

            <Link to='' className='extra-icons-present extra-icon-list'>
              <img src='https://i.imgur.com/7xvw5Ba.png'></img>
            </Link>

            <Link to='/mission' className='extra-icons-mission extra-icon-list'>
              <img src='https://i.imgur.com/RiYRK1r.png'></img>
            </Link>

            <Link to='guild' className='extra-icons-guild extra-icon-list'>
              <img src='https://i.imgur.com/tJGizKR.png'></img>
            </Link>
            
            <Link to='shop' className='extra-icons-shop extra-icon-list'>
              <img src='https://i.imgur.com/7aJZD56.png'></img>
            </Link>

          </div>

          <div className='torn-bg'>
            <img src='https://i.imgur.com/F4Yb2XC.png'></img>
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
                {/* <Link to='/' className='titlescreen-link'>Title</Link> */}
                {/* <Back /> */}
                <Link to='/menu' className='menu-link'>Menu</Link>
            </div>

          </div>

        </div>
    </>
  )
}
