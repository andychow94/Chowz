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
    <div>
      <EmptyStars>{emptyStars}</EmptyStars>
      <FilledStars>{filledStars}</FilledStars>
    </div>
  );
}

const EmptyStars = styled.div`

`;

const FilledStars = styled.div`

`;

export default Stars;
