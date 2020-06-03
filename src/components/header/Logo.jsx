import React from 'react';
import { StyledImg } from '../styled-components/common';

const Logo = () => {
  return (
    <h1>
      <StyledImg
        src="/images/logo.png"
        alt="York Inquirer"
        width="80px"
        height="45px"
      />
    </h1>
  );
};

export default Logo;
