"use client";

import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import styled from "styled-components";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Nav>
      <NavLogo />
      <Hamburger onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Links isOpen={isOpen}>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/pricing"}>Pricing</NavLink>
        <NavLink href={"/testimonials"}>Testimonials</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
      </Links>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: 769px) and (max-width:1000px) {
    flex-wrap: nowrap;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background: #000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2rem;

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    color: #000;
    transition: all 0.5 ease-in;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: #7b7fda;
    }

    &:active {
      text-decoration: underline 1px #000;
    }
  }

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;

    a:hover {
      transform: scale(1.25);
    }
  }
`;
