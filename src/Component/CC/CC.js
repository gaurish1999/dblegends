import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChronoContext from '../../Context/chrono/ChronoContext';
import './CC.css';

export default function CC() {

const [initCC] = useContext(ChronoContext)
  return (
    <div className='cc-div'>

      <img src='https://pbs.twimg.com/media/Ec9tFq8UwAA6TcM.png' 
        className='cc-img'
      />
      <p>{initCC}</p>

      <Link to='/shop' className='back-link'>
        <img src='https://iconsplace.com/wp-content/uploads/_icons/ffe500/256/png/plus-icon-19-256.png'
        className='cc-plus' />
      </Link>

    </div>
  )
}
