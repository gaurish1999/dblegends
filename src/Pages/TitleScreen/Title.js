import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css';

export default function Title() {
  return (
    <>
        {/* <h1>Title Screen</h1> */}
        <div className='container'>
          <div className='logos'>
            <img src='https://seeklogo.com/images/C/criware-logo-A1852745D8-seeklogo.com.gif'
            className='criware'
            />
            <img src='https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/135790535_10158770810415629_7131088511997592706_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=107&ccb=1-7&_nc_sid=7aed08&efg=eyJpIjoidCJ9&_nc_ohc=rkEMNeconYMAX8WX-ya&_nc_ht=scontent.fluh1-1.fna&oh=00_AT_uGFxdTahDzwdu8Z5CnYcn7WZ089IkaJJX7b8xA5Ix0Q&oe=62B8121F'
            className='bne'
            />
          </div>

          {/* <img src='https://i.imgur.com/qdiYFlU.png' className='title-char' /> */}

          <div className='bottom-pair'>
            <img src='https://i.imgur.com/4YDucoI.png'
            className='logo'
            /><br />

            <Link to='/home' className='touch-screen'>
              Touch Screen
            </Link>
          </div>
        </div>
    </>
  )
}
