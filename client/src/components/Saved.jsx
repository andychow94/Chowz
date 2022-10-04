import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalContext from '../GlobalContext';
import Stars from './Stars';

function Saved({ store }) {
  const globalStates = useContext(GlobalContext);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  function deleteStore() {
    axios.post('/delete', {
      _id: store._id,
    })
      .then((result) => {
        console.log('Successfully deleted:', result);
        globalStates.setUserList([]);
      })
      .catch((err) => {
        console.log('Could not delete store:', err);
      });
  }
  return (
    <Container>
      <Image src={store.url} alt="store-front" />
      <Info>
        <button type="submit" onClick={() => deleteStore()}>Delete</button>
        <div>
          <Stars rating={store.rating} />
          based on
          {store.review_count}
          reviews
        </div>
        <div>Price Range: {store.price}</div>
        <div>{store.name}</div>
        <div>{store.address_1}</div>
        <div>{store.address_2}</div>
        <div>{store.display_phone}</div>
        <div>{days[store.day]} {store.hour}:{store.minutes}</div>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
  background-color: #FFF6BF;
  background-clip: context-box;
  border-radius: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  margin-left: 1em;
`;

const Image = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  border-radius: 4px;
`;

export default Saved;
