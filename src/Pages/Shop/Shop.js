import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CC from '../../Component/CC/CC'
import Energy from '../../Component/Energy/Energy'
import Level from '../../Component/Level/Level'
import ChronoContext from '../../Context/chrono/ChronoContext'
import './Shop.css'

export default function Shop() {

  const [initCC, setInitCC] = useContext(ChronoContext);
  const run2900 = () => {
    setInitCC(initCC + 2900)
  }
  const run1000 = () => {
    setInitCC(initCC + 1000)
  }
  const run2000 = () => {
    setInitCC(initCC + 2000)
  }
  const run1100 = () => {
    setInitCC(initCC + 1100)
  }
  const run3000 = () => {
    setInitCC(initCC + 3000)
  }
  const run2200 = () => {
    setInitCC(initCC + 2200)
  }

  return (
    <div className='container'>

      <div className='top-three'>
        <Level />
        <Energy />
        <CC />
      </div>

      <div className='billing'>
        <button className='addCC' onClick={run2900}>2,900 CC - ₹3499</button>
        <button className='addCC' onClick={run1000}>1,000 CC - ₹1249</button>
        <button className='addCC' onClick={run2000}>1,000 CC - ₹699</button>

        <button className='addCC' onClick={run1100}>2,000 CC - ₹2599</button>
        <button className='addCC' onClick={run3000}>1,100 CC - ₹1499</button>
        <button className='addCC' onClick={run2200}>3,000 CC - ₹3599</button>
      </div>

      <div className='common-links'>
        <Link to='/home' className='home-link-btn'>Home</Link> 
        <Link to='/menu' className='menu-link'>Menu</Link>
      </div>
    </div>
  )
}
