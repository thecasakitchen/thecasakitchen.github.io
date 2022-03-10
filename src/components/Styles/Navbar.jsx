import styled from "styled-components";
import media from 'styled-media-query';

import { Theme } from ".";

export const NavBar = styled.div`
    position:sticky;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.25rem 1.5rem;
    line-height:0.5rem;
    justify-content: space-between;
    background: ${(props) => Theme.primary};
    color: ${(props) => Theme.white};
    box-shadow: 0 0 0.5rem 0.3rem ${(props) => Theme.shadow};
    z-index:10;
`;

export const NavSubBar = styled.div`
    position:sticky;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.1rem 1.5rem;
    justify-content: center;
    background: ${(props) => Theme.secondary};
    color: ${(props) => Theme.white};
    line-height:1.5rem;
`;

export const NavBarItem = styled.div`
    display:flex;
    align-items: center;
`;

export const NavTitle = styled.h1`
    font-family: 'Smooch Sans', sans-serif;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
`;