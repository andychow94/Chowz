import React from 'react';
import styled from 'styled-components';

function Stars({ rating }) {
  const percentage = rating * 20;
  const emptyStars = [];
  const filledStars = [];
  for (let i = 0; i < 5; i += 1) {
    emptyStars.push(<span className="empty-star" key={i}>&#9734;</span>);
    filledStars.push(<span className="filled-star" key={i}>&#9733;</span>);
  }
  return (
    <StarsContainer>
      <EmptyStars>{emptyStars}</EmptyStars>
      <FilledStars percentage={percentage}>{filledStars}</FilledStars>
    </StarsContainer>
  );
}

const StarsContainer = styled.div`
  position: relative;
  font-size: 20px;
  width: 100px;
`;

const EmptyStars = styled.div`
  position: relative;
  color: black;
`;

const FilledStars = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${({ percentage }) => percentage}%;
  overflow: hidden;
  color: yellow;
`;

export default Stars;
