import React from 'react'
import {FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink }
from './NavbarElements';
import Logo from '../../images/logo-white.svg'



const Navbar = ({ toggle }) => {
  return (
    <> 
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
          <img src={Logo} alt="logo" />

          </NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='../Aboutus'>Rreth Nesh</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='../Dashboard'>Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='../Services'>Sherbimet</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Regjistrohu</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="../signin">Kycu</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;