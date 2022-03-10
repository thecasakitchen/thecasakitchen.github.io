import React from "react";
import styled from "styled-components";

import { Container } from "../Styles";

export const ImageContainer = styled(Container)`
    align-self: center;
`;

export const ButtonContainer = styled(Container)`
    display:flex;
    flex-direction: row;
    flex:1;
    gap: 1.5rem;
    bottom: 0;
    margin: 0.5rem 0;
    align-self:center;
    align-items:center;
    background-color: transparent;
`;

