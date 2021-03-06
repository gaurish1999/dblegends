import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Back from '../../Component/Back/Back'
import './Menu.css';

export default function Menu() {

  return (
    <>
      <div className='container'>
        {/* <h1>This is Menu</h1> */}
        <div className='top-imgs'>
          <img src='https://i.imgur.com/ocDREcN.jpg' alt='legends-pass'></img>
          <img src='https://i.imgur.com/G8Zzmty.jpg' alt='legends-friends'></img>
        </div>

        <div className='six-btns'>

          <div className='six-btns-row1'>
            <Link to='/news'><button>News</button></Link>
            <Link to='/scan'><button>Scan</button></Link>
            <Link to='/customize'><button>Customize</button></Link>
          </div>
          <div className='six-btns-row2'>
            <Link to='/item'><button>Item</button></Link>
            <Link to='/friend'><button>Friend</button></Link>
            <Link to='/other'><button>Other</button></Link>
          </div>

        </div>

        <div className='all-rows'>

          <div className='row'>
            <Link to='/hoipoi'>
              <img src='https://i.imgur.com/If2tgQ6.png' alt='hoipoi'></img>
            </Link>
            <Link to='/exchangeshop'>
              <img src='https://i.imgur.com/MNIPkDp.png' alt='exchangeshop'></img>
            </Link>
          </div>

          <div className='row'>
            <Link to='/train'>
              <img src='https://i.imgur.com/tNvHeYx.png' alt='train'></img>
            </Link>
            <Link to='/coop'>
              <img src='https://i.imgur.com/k70mTkd.png' alt='coop'></img>
            </Link>
            <Link to='/guild'>
              <img src='https://i.imgur.com/SEHngSL.png' alt='guild'></img>
            </Link>
          </div>

          <div className='row'>
            <Link to='/adventure'>
              <img src='https://i.imgur.com/bx1Unza.png' alt=''></img>
            </Link>
            <Link to='/event'>
              <img src='https://i.imgur.com/Dh8I1As.png' alt=''></img>
            </Link>
            <Link to='/pvp'>
              <img src='https://i.imgur.com/sgD8ckk.png' alt=''></img>
            </Link>
          </div>

          <div className='row'>
            <Link to='/story'>
              <img src='https://i.imgur.com/YpR6xeY.png' alt=''></img>
            </Link>
            <Link to='/mission'>
              <img src='https://i.imgur.com/i6aYTjO.png' alt=''></img>
            </Link>
            <Link to='/top'>
              <img src='https://i.imgur.com/aw7ONnB.png' alt=''></img>
            </Link>
          </div>

          <div className='row'>
            <Link to='/shop'>
              <img src='https://i.imgur.com/tIpeYgN.png' alt=''></img>
            </Link>
            <Link to='/summon'>
              <img src='https://i.imgur.com/q7EjqkV.png' alt=''></img>
            </Link>
            <Link to='/characters'>
              <img src='https://i.imgur.com/upZe314.png' alt=''></img>
            </Link>
          </div>

        </div>

        <div className='common-links'>
          {/* <div className='home-btn-flex'> */}
            <Link to='/home' className='home-link-btn'>Home</Link>
          {/* </div>        */}
        
          <Back />
        </div>
        
      </div>
    </>
  )
}
