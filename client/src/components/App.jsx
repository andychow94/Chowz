import React, { useState, useMemo } from 'react';
import GlobalContext from '../GlobalContext';
import RestaurantList from './RestaurantList';

function App() {
  const [yelpList, setYelpList] = useState(['1', '2', '3']);
  const globalStates = useMemo(() => ({
    yelpList,
    setYelpList,
  }), [yelpList]);

  return (
    <GlobalContext.Provider value={globalStates}>
      <RestaurantList />
    </GlobalContext.Provider>
  );
}

export default App;
