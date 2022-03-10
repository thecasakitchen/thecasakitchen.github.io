import styled from "styled-components";
import media from "styled-media-query";

import { Drawer as MUIDrawer, MenuItem as MUIMenuItem } from "@material-ui/core";
import { Theme, CircularButton, CloseIcon } from ".";

export const Drawer = styled(MUIDrawer)`
`;

export const DrawerItem = styled(MUIMenuItem)`
    display: flex !important;
    min-width:240px !important;
    height:2.5rem !important;
    padding: 0.5rem 1rem !important;
    margin: 0.5rem 1rem !important;
    background: ${(props)=>props.active?Theme.primary:null} !important;
    color: ${(props)=>props.active?Theme.white:Theme.primary} !important;
    border-radius: 4px !important;
    &:hover{
        background: ${Theme.primary} !important;
        color: ${Theme.white} !important;
    }
`;

export const DrawerClose = styled((props) => (
    <CircularButton {...props}>
        <CloseIcon/>
    </CircularButton>
))`
    margin:0.75rem 0.5rem !important;
    margin-left:auto !important;
`