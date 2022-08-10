import React, { useState, useMemo } from 'react';
import GlobalContext from '../GlobalContext';
import RestaurantList from './RestaurantList';
import Location from './Location';

function App() {
  const [yelpList, setYelpList] = useState(['1', '2', '3']);
  const [location, setLocation] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const globalStates = useMemo(() => ({
    yelpList,
    setYelpList,
    location,
    setLocation,
    searchInput,
    setSearchInput,
  }), [yelpList, location, searchInput]);

  return (
    <GlobalContext.Provider value={globalStates}>
      <Location />
      <RestaurantList />
    </GlobalContext.Provider>
  );
}

export default App;
