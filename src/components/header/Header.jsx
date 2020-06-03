import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Logo from './Logo';
import Compass from './Compass';
import Avatar from './Avatar';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  display: grid;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgb(196, 179, 122);
  background-color: rgb(233, 221, 181);
  grid-area: header;
  grid-template-areas: '. logo nav .';
  grid-template-columns:
    minmax(30px, 1fr) minmax(150px, 450px)
    minmax(150px, 450px) minmax(30px, 1fr);
`;

const StyledLink = styled(Link)`
  max-width: 504px;
  margin-top: 8px;
  grid-area: logo;
`;

const StyledNav = styled.nav`
  display: flex;
  max-width: 504px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  grid-area: nav;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <StyledNav>
        <Link to="/explore">
          <Compass />
        </Link>
        <Avatar />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
