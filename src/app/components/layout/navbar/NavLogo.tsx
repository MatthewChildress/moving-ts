import React from 'react';
import styled from 'styled-components';

const NavLogo = () => {
  return (
    <Logo href="/">
        Childress & Childress
        <span> Moving Co.</span>
    </Logo>
  )
}

export default NavLogo

const Logo = styled.a`
    padding: 1rem 0;
    text-decoration: none;
    color: #000;
    font-weight: 800;
    font-size: 1.6rem;

    span {
        font-weight: 300;
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1em;
    }
`