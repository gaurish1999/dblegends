import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Back.css';

export default function Back() {
    const goback = useNavigate();

  return (
    <div className='back-link-flex'>
        <Link to='#' onClick={() => goback(-1)} className='back-link'>Back</Link>
    </div>
  )
}
