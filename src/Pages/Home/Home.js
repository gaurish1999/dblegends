import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import './Home.css';

export default function Home() {
  return (
    <>
        {/* <h1>Home</h1> */}
        <img src='https://i.imgur.com/qdiYFlU.png' alt='fav-char' className='fav-char'/><br />

        <Link to='/story'>Story</Link><br />
        <Link to='/event'>Events</Link><br />
        <Link to='/top'>Tournament of Power</Link><br />
        <Link to='/pvp'>PvP</Link><br />
        <Link to='/menu'>Menu</Link><br />
        <Back />
    </>
  )
}
