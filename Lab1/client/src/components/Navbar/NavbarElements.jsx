import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
    background: #252438;
    height: 80px;
    border-radius:30px;
   // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position:relative;
    top: 0;
    z-index: 10;
    height:89px;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #ffffff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: -50px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        color: #b81c1c;
        transition: 0.2s ease-in-out;

    }

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width : 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
    
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkR)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 120%;
    cursor: pointer;
    font-weight:lighter;

    &.active{
       border-bottom: 3px solid #ffffff;

    }
    &:hover{
        color: #b0b0cf;
        transition: 0.2s ease-in-out;

    }
` 

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: rgba(252, 156, 9, 1);
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: -22px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #212131;
        color: #fff;
        border: 1px solid #ffa958;
        
    }


`
