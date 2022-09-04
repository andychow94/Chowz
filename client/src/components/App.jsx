import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import GlobalContext from '../GlobalContext';
import RestaurantList from './RestaurantList';
import Location from './Location';
import Forecast from './Forecast';
import SavedList from './SavedList';
import Calendar from './Calendar';

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
      <ContainerItems>
        <Title>
          Chowz
          <Text>
            Plan your next food adventure
          </Text>
        </Title>
        <TopBar>
          <Location />
          {globalStates.yelpList.length > 0 && <Forecast />}
        </TopBar>
        <TopRight>
          <Calendar />
        </TopRight>
        <Bottom>
          <RestaurantList />
          <SavedList />
        </Bottom>
      </ContainerItems>
    </GlobalContext.Provider>
  );
}

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 6vw;
  text-align: center;
`;

const Text = styled.div`
  font-size: 2vw;
  text-align: center;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopRight = styled.div`
  display: grid;
  position: absolute;
  top: 5%;
  right: 5%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
`;

export default App;
