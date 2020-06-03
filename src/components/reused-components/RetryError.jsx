import React from 'react';
import {
  StyledButton,
  StyledModalBackground,
  StyledModalContent,
  StyledP
} from '../styled-components/common';

const RetryError = ({ err, retryFunction }) => {
  const handleClick = () => {
    retryFunction();
  };

  return (
    <StyledModalBackground>
      <StyledModalContent>
        <StyledButton error type="button" onClick={handleClick}>
          <StyledP primary center noMargin>{`${err}. Tap to retry.`}</StyledP>
        </StyledButton>
      </StyledModalContent>
    </StyledModalBackground>
  );
};

export default RetryError;
