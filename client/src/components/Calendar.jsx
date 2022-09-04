import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../GlobalContext';

function Calendar() {
  const [display, setDisplay] = useState(false);
  const globalStates = useContext(GlobalContext);
  function showCalendar() {
    setDisplay(!display);
  }
  return (
    <div>
      <Button onClick={() => showCalendar()}>View Calendar</Button>
    </div>
  );
}

export default Calendar;

const Button = styled.button`
  width: 150px;
  height: 50px;
`;
