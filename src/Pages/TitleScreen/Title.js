import React from 'react'
import { Link } from 'react-router-dom'

export default function Title() {
  return (
    <>
        <h1>Title Screen</h1>

        <Link to='/home'>Let's Go!</Link>
    </>
  )
}
