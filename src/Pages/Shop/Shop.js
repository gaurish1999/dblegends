import React from 'react'

export default function Shop() {
  return (
    <>
        <h1>Shop</h1>
        <h1>{process.env.REACT_APP_PLAYER_CC_AMOUNT_DEFAULT - 1547}</h1>
    {/* <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
          {process.env.NODE_ENV === 'developmnt' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE} */}

    </>
  )
}
