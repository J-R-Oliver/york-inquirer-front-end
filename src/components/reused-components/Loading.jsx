import React from 'react';
import styled, { keyframes } from 'styled-components';
import { StyledFlexDiv } from '../styled-components/common';

const StyledCenterFlexDiv = styled(StyledFlexDiv)`
  width: 100%;
  height: 100vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledRotateImg = styled.img`
  animation: ${rotate} 10s linear infinite;
`;

const Loading = () => {
  return (
    <StyledCenterFlexDiv direction="column" justify="center">
      <StyledRotateImg src="/images/rose.png" alt="yorkshire rose" />
    </StyledCenterFlexDiv>
  );
};

export default Loading;
