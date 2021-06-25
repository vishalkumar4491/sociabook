import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateTopScroll as scroll } from 'react-scroll/modules/mixins/animate-scroll';
import logo from '../../logo.svg'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <h1>Sociaook</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ='/'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='/about'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='/buy' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Buy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ='/signin'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sell</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
