import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalContext from '../GlobalContext';

function Location() {
  const globalStates = useContext(GlobalContext);
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
          console.log(result.data.businesses);
          globalStates.setYelpList(result.data.businesses);
        })
        .catch((err) => {
          console.log('Error in search:', err);
        });
    }
  }
  return (
    <Form onSubmit={(event) => search(event)}>
      <Label>
        Search by Food/Restaurant:
        <Input type="text" required onChange={(event) => updateSearch(event)} />
      </Label>
      <Label>
        Enter Address/Zip Code:
        <Input type="text" required onChange={(event) => updateLocation(event)} />
        <Button type="submit">Search</Button>
      </Label>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  padding: 1em;
  font-size: 1.1em;
`;

const Input = styled.input`
  border-radius: 5px;
  font-size: 1.1em;
`;

const Button = styled.button`
  border-radius: 5px;
  font-size: 1.1em;
`;

export default Location;
