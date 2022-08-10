import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext';

function RestaurantList() {
  const globalStates = useContext(GlobalContext);
  return (
    <div>
      {globalStates.yelpList}
    </div>
  );
}

export default RestaurantList;
