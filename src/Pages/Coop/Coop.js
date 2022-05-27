import React from 'react'
import Back from '../../Component/Back/Back'
import ExchangeShop from '../ExchangeShop/ExchangeShop'
import Menu from '../Menu/Menu'
import './Coop.css';

export default function Coop() {
  return (
    <>
        <ExchangeShop />
        <hr />
        {/* <h1>Hyperdimensional Co-op</h1> */}
        <img src='https://i.imgur.com/E5UQioW.png' className='coop-banner'/>
        <hr />

        <div className='difficulty-banners'>
          <div className='Extreme'>
            <div className='Extrene-banner'>
                <p>Extreme</p>
            </div>
          </div>

          <div className='Advanced'>
            <div className='Advanced-banner'>
              <p>Advanced</p>
            </div>
          </div>

          <div className='intermediate'>
            <div className='intermediate-banner'>
              <p>Intermediate</p>
            </div>
          </div>

          <div className='Beginner'>
            <div className='Beginner-banner'>
              <p>Beginner</p>
            </div>
          </div>
        </div>

        {/* <Menu /> */}
        <Back />

    </>
  )
}
