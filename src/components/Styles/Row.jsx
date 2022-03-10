import styled from "styled-components";
import media from 'styled-media-query';

export const Row = styled.div`
  display: block;
  margin: 0.5rem 0;
  line-height: 14px;
  align-items: center;
  text-align: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin: 0.5rem 0;
  line-height: 14px;
  align-items: center;
  text-align: center;
  ${(props)=>(props.responsive
    ? media.lessThan(props.responsive)`
        flex-direction: column;
        padding: 0 0.5rem;
      `
    : null
  )}
`;