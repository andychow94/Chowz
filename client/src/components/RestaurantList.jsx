import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../GlobalContext';
import Restaurant from './Restaurant';

function RestaurantList() {
  const globalStates = useContext(GlobalContext);
  return (
    <div>
      <Text>
        {globalStates.yelpList.length > 0 && 'Search Results:'}
      </Text>
      {globalStates.yelpList.map((store, i) => <Restaurant store={store} key={i} />)}
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

export default RestaurantList;
