import { useEffect, useState } from 'react';
import './CC.css';

export default function CC() {

const [cc, setCc] = useState(10000);

// useEffect(() => {
//   setCc(cc-100);
//   console.log(cc)
// }, [])
  return (
    <div className='cc-div'>
      <img src='https://pbs.twimg.com/media/Ec9tFq8UwAA6TcM.png' 
        className='cc-img'
      />
      <p>{cc}</p>
      <img src='https://iconsplace.com/wp-content/uploads/_icons/ffe500/256/png/plus-icon-19-256.png'
      className='cc-plus'
      />
      {/* <p>This is CC Counter</p> */}
    </div>
  )
}
