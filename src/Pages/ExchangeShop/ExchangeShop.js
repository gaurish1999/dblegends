import React from 'react'
import { Link } from 'react-router-dom'

export default function ExchangeShop() {
  return (
    <>
        <h1>Exchange Shop</h1>
        <Link to='/exchangeshop'>Reload</Link>
        <hr />

        <Link to='/home'>Home</Link>
        <Link to='/menu'>Menu</Link>
    </>
  )
}
