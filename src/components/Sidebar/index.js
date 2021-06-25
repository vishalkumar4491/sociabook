import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='/buy' onClick={toggle}>Buy</SidebarLink>
                    <SidebarLink to='/sell' onClick={toggle}>Sell</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap> 
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
