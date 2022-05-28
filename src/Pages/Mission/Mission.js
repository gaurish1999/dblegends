import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import MissionIndex from '../../Component/Tabs/Missionindex'

export default function Mission() {
  return (
    <>
        <h1>Missions</h1>
        <hr />

        <MissionIndex />
        <Back />
        <Link to='/menu'>Menu</Link>
    </>
  )
}
