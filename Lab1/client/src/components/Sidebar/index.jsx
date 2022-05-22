import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen= {isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon> 
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}> Rreth nesh </SidebarLink>
                <SidebarLink to="Dashboard" onClick={toggle}> Dashboard </SidebarLink>
                <SidebarLink to="services" onClick={toggle}> Sherbimet </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}> Regjistrohu </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to ="/signin">Kycu</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar