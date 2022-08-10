import React, { useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../GlobalContext';

function Location() {
  const globalStates = useContext(GlobalContext);
  const googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
  function updateLocation(event) {
    globalStates.setLocation(event.target.value);
  }
  function search() {
    console.log(globalStates.location);
    axios.get('/location', { params: { location: globalStates.location } });
  }
  return (
    <div>
      Address/Location:
      <input type="text" onChange={updateLocation} />
      <button type="submit" onClick={() => search()}>Search</button>
    </div>
  );
}

export default Location;
