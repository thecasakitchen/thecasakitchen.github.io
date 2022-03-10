import React from 'react'
import styled from 'styled-components'

import { Theme } from '.';

const ThumbnailSize = "2rem"; 

const Image = styled.img`
    width:${(props)=>(props.width?props.width:"100%")};
    height:${(props)=>(props.height?props.height:"auto")};
`;


const ThumbnailContainer = styled.div`
    width:${(props)=>(props.width?props.width:ThumbnailSize)};
    height:${(props)=>(props.height?props.height:(props.width?props.width:"auto"))};
    margin:0rem 0.5rem 0rem 0rem;
    border-radius:5px;
    overflow:hidden;
    margin:0 auto;
    background:${(props)=>Theme.contrastBackground};
`;

const ThumbnailImage = styled.img`
    width:${(props)=>(props.width?props.width:ThumbnailSize)};
    height:${(props)=>(props.height?props.height:"auto")};
    cursor:pointer;
`;

export const MenuImage = styled.img`
    display: block;
    max-height: 80vh;
    width: 100%;
    min-width: 100%;
`;

export const FlexImage = ({src=null, ...props}) => {
    return (
        <Image src={src} alt="Product Image" {...props}/>
    )
}

export const Thumbnail = ({src=null, title="", onClickHandler, ...props}) => {
    return (
        <ThumbnailContainer title={title} onClick={(e)=>onClickHandler(e)}>
            <ThumbnailImage src={src} alt="Thumbnail" {...props}/>
        </ThumbnailContainer>
    )
}
