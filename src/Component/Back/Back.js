import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Back() {
    const goback = useNavigate();

  return (
    <>
        <Link to='#' onClick={() => goback(-1)}>Back</Link>
    </>
  )
}
