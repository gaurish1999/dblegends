import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <h1>Home</h1>

        <Link to='/story'>Story</Link><br />
        <Link to='/event'>Events</Link><br />
        <Link to='/top'>Tournament of Power</Link><br />
        <Link to='/pvp'>PvP</Link><br />
        <Link to='/menu'>Menu</Link><br />
    </>
  )
}
