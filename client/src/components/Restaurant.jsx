/* eslint-disable max-len */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalContext from '../GlobalContext';

function Restaurant({ store }) {
  const globalStates = useContext(GlobalContext);
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const minutes = [0, 15, 30, 45, 60];
  const [day, setDay] = useState('0');
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  function updateDay(event) {
    console.log('Day:', event.target.value);
    setDay(event.target.value);
  }
  function updateHour(event) {
    console.log(event.target.value);
    setHour(event.target.value);
    console.log('Set Hour:', hour);
  }
  function updateMinute(event) {
    setMinute(event.target.value);
  }
  function savePlace(event) {
    event.preventDefault();
    axios.post('/save', {
      id: store.id,
      url: store.image_url,
      rating: store.rating,
      review_count: store.review_count,
      price: store.price,
      name: store.name,
      address_1: store.location.display_address[0],
      address_2: store.location.display_address[1],
      phone: store.display_phone,
      day: day,
      hour: hour,
      minutes: minute,
    })
      .then(() => {
        globalStates.setUserList([]);
      })
      .catch((err) => {
        console.log('Error in saving place:', err);
      });
  }
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
      <Time onSubmit={(event) => savePlace(event)}>
        <label>
          Day:
          <select onChange={(event) => updateDay(event)}>
            <option value="0">Monday</option>
            <option value="1">Tuesday</option>
            <option value="2">Wednesday</option>
            <option value="3">Thursday</option>
            <option value="4">Friday</option>
            <option value="5">Saturday</option>
            <option value="6">Sunday</option>
          </select>
        </label>
        <label>
          Hour:
          <select onChange={(event) => updateHour(event)}>
            {hours.map((num) => <option value={num} key={num}>{num}</option>)}
          </select>
        </label>
        <label>
          Minute:
          <select onChange={(event) => updateMinute(event)}>
            {minutes.map((num) => <option value={num} key={num}>{num}</option>)}
          </select>
        </label>
        <button type="submit">Save Place</button>
      </Time>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
  background-color: #008000;
  background-clip: context-box;
  border-radius: 15px;
  margin: 5px;
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

const Time = styled.form`
  display: flex;
  align-items: center;
`;

export default Restaurant;
