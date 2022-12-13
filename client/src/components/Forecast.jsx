import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalContext from '../GlobalContext';

function Forecast() {
  const globalStates = useContext(GlobalContext);
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    axios.get('/weather', { params: { location: globalStates.location } })
      .then((result) => {
        console.log(result);
        const temp = result.data.periods;
        temp.splice(10);
        setForecast(temp);
      })
      .catch((err) => {
        console.log('Error in receiving forecast:', err);
      });
  }, [globalStates.yelpList]);
  return (
    <Container>
      {forecast.map((data, i) => (
        <Item key={i}>
          <div>
            {data.temperature}
            &#xb0;
            {data.temperatureUnit}
          </div>
          <div>
            {data.name}
          </div>
          <div>
            {(new Date(data.startTime)).toLocaleDateString()}
          </div>
        </Item>
      ))}
    </Container>
  );
}

export default Forecast;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Item = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  border-style: solid;
  border-color: white;
  background-color: #90EE90;
`;
