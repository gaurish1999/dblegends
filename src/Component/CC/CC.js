import { useEffect, useState } from 'react';
import './CC.css';

export default function CC() {

const [cc, setCc] = useState(JSON.parse(localStorage.getItem('Chrono Crystals')));
// const [cc, setCc] = useState(9999);



useEffect(() => {


  localStorage.setItem('Chrono Crystals', JSON.stringify(cc));
// }
// else{
  // let cc_new = JSON.parse(localStorage.getItem('Chrono Crystals'));
  // localStorage.setItem('Chrono Crystals', JSON.stringify(setCc(cc )));

// }
  // setCc(cc-100);
  // console.log(cc)
}, [cc])
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
