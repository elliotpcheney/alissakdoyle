import React from 'react';
import { Link } from "gatsby"
import { css } from '@emotion/core';

const navStyles = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  height: 60px;
  width: inherit;
  background-color: white;
  border-bottom: 1px solid lightgray;
  text-transform: uppercase;
  z-index:2;
  h3 {
    font-size: 0.9em;
    margin: 0 1rem;
  }
`;

const Nav = () => {
  return (
    <nav css={navStyles}>
      <Link to='/'><h3>Resume</h3></Link>
      <Link to='/about'><h3>About</h3></Link>
      <Link to='/'><h3>Photos</h3></Link>
      <Link to='/'><h3>Contact Me</h3></Link>
    </nav>
  );
};

export default Nav;