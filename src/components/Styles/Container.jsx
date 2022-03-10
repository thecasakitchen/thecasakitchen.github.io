import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "./Theme";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex:1;
    max-width:100vw;
    min-width:400px;
    height:100vh;
    background-color: ${Theme.app};
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    width:100%;
    margin:0;
    padding:0;
    flex-wrap: wrap;
    word-wrap: break-word;
    background-color: ${Theme.body};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    margin:0 1rem;
    padding:0;
    background-color: ${Theme.container};
    overflow:auto;
    overflow-y:overlay;
    scrollbar-width:thin;
    scrollbar-color:${Theme.scrollThumb} ${Theme.scrollTrack};
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: ${Theme.scrollTrack};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${Theme.scrollThumb};
        border-radius: 2px;
        cursor: pointer !important;
    }
`;