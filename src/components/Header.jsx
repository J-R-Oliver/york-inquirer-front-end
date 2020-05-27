import React from 'react';
import { Link } from '@reach/router';
import Logo from './Logo';
import Compass from './Compass';
import Avatar from './Avatar';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Link to="/explore">
          <Compass />
        </Link>
        <Avatar />
      </nav>
    </header>
  );
};

export default Header;
