import React, { useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../GlobalContext';

function Location() {
  const globalStates = useContext(GlobalContext);
  const googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
  function updateLocation(event) {
    event.preventDefault();
    globalStates.setLocation(event.target.value);
  }
  function updateSearch(event) {
    event.preventDefault();
    globalStates.setSearchInput(event.target.value);
  }
  function search(event) {
    console.log(globalStates.location);
    event.preventDefault();
    if (globalStates.location && globalStates.searchInput !== undefined) {
      axios.get('/location', { params: { location: globalStates.location, input: globalStates.searchInput } })
        .then((result) => {
          console.log(result.data);
          globalStates.setYelpList(result.data);
        })
        .catch((err) => {
          console.log('Error in search:', err);
        });
    }
  }
  return (
    <form onSubmit={(event) => search(event)}>
      <label>
        Food/Restaurant:
        <input type="text" required onChange={(event) => updateSearch(event)} />
      </label>
      <br />
      <label>
        Address/Location:
        <input type="text" required onChange={(event) => updateLocation(event)} />
        <button type="submit">Search</button>
      </label>
    </form>
  );
}

export default Location;
