import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Back from '../../Component/Back/Back'

export default function Menu() {

  return (
    <>
        <h1>This is Menu</h1>

        <Link to='/news'>News</Link><br />
        <Link to='/scan'>Scan</Link><br />
        <Link to='/customize'>Customize</Link><br />
        <Link to='/item'>Item</Link><br />
        <Link to='/friend'>Friend</Link><br />
        <Link to='/other'>Other</Link><br />
        <Link to='/exchangeshop'>Exchange Shop</Link><br />
        <Link to='/train'>Train</Link><br />
        <Link to='/coop'>Co-op</Link><br />
        <Link to='/guild'>Guild</Link><br />
        <Link to='/adventure'>Aventure</Link><br />
        <Link to='/event'>Event</Link><br />
        <Link to='/pvp'>PvP</Link><br />
        <Link to='/story'>Story</Link><br />
        <Link to='/mission'>Mission</Link><br />
        <Link to='/top'>Tournament of Power</Link><br />
        <Link to='/shop'>Shop</Link><br />
        <Link to='/summon'>Summon</Link><br />
        <Link to='/characters'>Characters</Link><br />
        <Link to='/home'>Home</Link><br />
        <Back />
    </>
  )
}
