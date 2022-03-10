import React from 'react'
import styled from "styled-components";
import { KeyboardArrowDown, CloseOutlined, ArrowDropDown, Menu } from '@material-ui/icons';

import {Theme} from ".";

export const ArrowIcon = styled((props) => (
    <KeyboardArrowDown {...props}/>
))`
    cursor: pointer;
    font-size:24px !important;
    color: ${(props)=>(props.color?props.color:Theme.blue)};
    transform: ${(props)=>(props.direction==="up"
        ?   "rotate(180deg)"
        :props.direction==="left"
        ?   "rotate(90deg)"
        :props.direction==="right"
        ?   "rotate(270deg)"
        :   "rotate(0deg)"
        )};
    transition-property: transform;
    transition-duration: 1s;
`;

export const ArrowFilledIcon = styled((props) => (
    <ArrowDropDown {...props}/>
))`
    cursor: pointer;
    font-size:24px !important;
    position:relative;
    top:7px;
    color: ${(props)=>(props.color?props.color:Theme.blue)};
    transform: ${(props)=>(props.direction==="up"
        ?   "rotate(180deg)"
        :props.direction==="left"
        ?   "rotate(90deg)"
        :props.direction==="right"
        ?   "rotate(270deg)"
        :   "rotate(0deg)"
        )};
    transition-property: transform;
    transition-duration: 1s;
`;

export const CloseIcon = styled((props) => (
    <CloseOutlined {...props}/>
))`
    cursor: pointer;
    font-size:24px !important;
    color: ${(props)=>(props.color?props.color:Theme.primary)};
`;

export const MenuIcon = styled((props) => (
    <Menu {...props}/>
))`
    cursor: pointer;
    font-size:24px !important;
    color: ${(props)=>(props.color?props.color:Theme.white)} !important;
`;