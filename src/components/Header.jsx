import React from 'react';
import Logo from './Logo';
import Compass from './Compass';
import Avatar from './Avatar';

const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <Compass />
        <Avatar />
      </nav>
    </header>
  );
};

export default Header;
