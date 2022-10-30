// import React, { useContext, useState } from 'react'

// export const Context = React.createContext();
// export const ContextUpdate = React.createContext();

// export function useCC() {
//   return useContext(Context)
// }
// export function useCCUpdate() {
//   return useContext(ContextUpdate)
// }

// export default function CCAmount({ children }) {

//     const [items, setItems] = useState(9000);

//     function setCC() {
//       setItems(items+1000)
//     }
    
//   return (
//     <Context.Provider value = { { items } }>
//       <ContextUpdate.Provider value = {setCC}>
//         {children}
//       </ContextUpdate.Provider>
//     </Context.Provider>
//   )
// }
