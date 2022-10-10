/* eslint-disable max-len */
import React, { useEffect, useState, useContext, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalContext from '../GlobalContext';
import Saved from './Saved';

function SavedList() {
  const globalStates = useContext(GlobalContext);
  // const list = useRef(null);
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/list')
      .then((result) => {
        console.log('Retrieved List:', result);
        // list.current = result.data;
        result.data.sort((a, b) => a.day - b.day || a.hour - b.hour || a.minutes - b.minutes);
        setList(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log('Error in retrieving list', err);
      });
  }, [globalStates.userList]);
  return (
    <>
      <Text>
        {list.length > 0 && 'Saved Places:'}
      </Text>
      <SavedContainer>
        {list.length > 0 && list.map((store, i) => <Saved store={store} key={i} />)}
      </SavedContainer>
    </>
  );
}

const Text = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

const SavedContainer = styled.div`

`;

export default SavedList;
