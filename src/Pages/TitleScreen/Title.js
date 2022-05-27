import React from 'react'
import { Link } from 'react-router-dom'

export default function Title() {
  return (
    <>
        {/* <h1>Title Screen</h1> */}
        <img src='https://i.imgur.com/4YDucoI.png' /><br />

        <Link to='/home'>Touch Screen</Link>
    </>
  )
}
