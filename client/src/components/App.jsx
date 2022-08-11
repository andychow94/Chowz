import React, { useState, useMemo } from 'react';
import GlobalContext from '../GlobalContext';
import RestaurantList from './RestaurantList';
import Location from './Location';

function App() {
  const [yelpList, setYelpList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [location, setLocation] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const globalStates = useMemo(() => ({
    yelpList,
    setYelpList,
    userList,
    setUserList,
    location,
    setLocation,
    searchInput,
    setSearchInput,
  }), [yelpList, location, searchInput, userList]);

  return (
    <GlobalContext.Provider value={globalStates}>
      <Location />
      <RestaurantList />
    </GlobalContext.Provider>
  );
}

export default App;
