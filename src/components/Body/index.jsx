import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Menu from "../Menu";
import Contact from "../Contact";

import { BodyContainer, CircularButton, Drawer, DrawerClose, DrawerItem, MenuIcon, NavBar, NavBarItem, NavTitle, Thumbnail } from "../Styles";
import Logo from "./../../assets/images/logo.png";

const Body = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <BodyContainer>
            <NavBar>
                <NavBarItem align="center">
                    <Thumbnail src={Logo} title="logo" alt="logo" /> 
                    <NavTitle>The Casa Kitchen</NavTitle>
                </NavBarItem>
                
                <NavBarItem align="center">
                    <CircularButton bgcolor="transparent" onClick={()=>setSidebarOpen(true)}>
                        <MenuIcon/>
                    </CircularButton>
                </NavBarItem>
            </NavBar>

            <Drawer open={sidebarOpen} onClose={()=>setSidebarOpen(false)} anchor={"right"}>
                <DrawerClose onClick={()=>setSidebarOpen(false)}/>
                <DrawerItem 
                    active={window.location.pathname==="/"}
                    onClick={()=>window.location="/"}
                >
                    Menu
                </DrawerItem>
                {/* <DrawerItem 
                    active={window.location.pathname==="/menu"}
                    onClick={()=>window.location="/menu"}
                >
                    Menu
                </DrawerItem>
                <DrawerItem 
                    active={window.location.pathname==="/contact"}
                    onClick={()=>window.location="/contact"}
                >
                    Contact
                </DrawerItem> */}
            </Drawer>

            <Router>
                <Routes>
                    <Route path="/" element={<Menu/>} />
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </BodyContainer>
    );
}

export default Body;