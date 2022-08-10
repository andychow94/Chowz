import React, {
 useState, useEffect, createContext, useContext,
} from 'react';

const GlobalContext = createContext();

export default GlobalContext;

// export function useGlobalContext() {
//   return useContext(GlobalContext);
// }

// export function GlobalContextProvider
