import React from 'react'
import {FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink }
from './NavbarElements';
import Dashboard from '../Dashboard/index';
import { Link } from 'react-router-dom';


const Navbar = ({ toggle }) => {
  return (
    <> 
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">rezerGo</NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Rreth Nesh</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Dashboard'>Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Sherbimet</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Regjistrohu</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Kycu</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;