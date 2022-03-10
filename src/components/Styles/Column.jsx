import styled from "styled-components";
import media from 'styled-media-query';

export const Column = styled.div`
    display: block;
    width:100%;
    padding: 0 0.5rem;
    line-height: 14px;
    align-items: center;
    text-align: center;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    align-self:flex-start;
    padding: 0 0.5rem;
    font-weight:normal;
    line-height: 14px;
    text-align: center;
    ${(props)=>(props.responsive
        ?   media.lessThan(props.responsive)`
                align-items:center;
                justify-content:center;
            ` 
        :   null
    )}
`;
