import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import Restaurant from './Restaurant';

function RestaurantList() {
  const globalStates = useContext(GlobalContext);
  return (
    <div>
      {globalStates.yelpList.map((store, i) => <Restaurant store={store} key={i} />)}
    </div>
  );
}

export default RestaurantList;
