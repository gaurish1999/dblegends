import React, { useState } from 'react'

export const Context = React.createContext();
export default function CCAmount({children}) {

    const [items, setItems] = useState(9000);
    
  return (
    <Context.Provider value = { { items, setItems} }>
        {children}
    </Context.Provider>
  )
}
