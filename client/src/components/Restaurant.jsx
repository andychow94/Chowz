import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../GlobalContext';

function Restaurant({ store }) {
  const [hour, setHour] = useState('');
  return (
    <Container>
      <Image src={store.image_url} alt="store-front" />
      <Info>
        <div>{store.rating}/5 stars based on {store.review_count} reviews</div>
        <div>Price Range: {store.price}</div>
        <div>{store.name}</div>
        <div>{store.location.display_address[0]}</div>
        <div>{store.location.display_address[1]}</div>
        <div>{store.display_phone}</div>
      </Info>
      <Time>
        <label>
          Hour:
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </label>
        <label>
          Minute:
        </label>
      </Time>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
  padding-bottom: 4px;
  column-gap: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  border-radius: 4px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
`;

export default Restaurant;
