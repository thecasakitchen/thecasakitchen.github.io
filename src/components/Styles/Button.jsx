import React from "react";
import styled from "styled-components";

import { Button as MUIButton } from "@material-ui/core";
import { Theme } from ".";

export const Button = styled((props) => (
  <MUIButton {...props}> {props.children} </MUIButton>
))`
    width: max-content !important;
    min-width: 8rem !important;
    max-width: max-content !important;
    height: 2rem !important;
    margin: 0.25rem 0.25rem !important;
    padding: 0rem 1rem !important;
    color: ${(props) => (props.disabled ? Theme.white : 
                        (props.color ? props.color : 
                        (props.bgcolor ? Theme.white : Theme.black)))} !important;
    background-color: ${(props) => (props.bgcolor ? (props.disabled ? 
                                   Theme.disabled : props.bgcolor) :
                                    Theme.white)} !important;
    border: ${(props) => (props.disabled ? Theme.disabled :
                         (props.borderColor ? props.borderColor :
                         (props.bgcolor ? props.bgcolor :
                         (props.color ? props.color : Theme.disabled))))} 2px solid !important;
    border-radius: 4px !important;
    font-family: inherit !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 14px !important;
    text-align: center !important;
    letter-spacing: 0.02em !important;
    text-transform: none !important;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")} !important;

    &:hover {
        filter: brightness(0.90) !important;
    }
`;

export const CircularButton = styled((props) => (
    <Button {...props}> {props.children} </Button>
))`
    width: 2rem !important;
    min-width: 2rem !important;
    max-width: 2rem !important;
    height: 2rem !important;
    border-radius: 50% !important;
    border-width:0px !important;
`;

export const SquareButton = styled((props) => (
    <Button {...props}> {props.children} </Button>
))` 
    width: 2rem !important;
    min-width: 2rem !important;
    max-width: 2rem !important;
    height: 2rem !important;
`;

export const ButtonPrimary = styled((props) => (
    <Button bgcolor={Theme.primary} {...props}>
        {props.children}
    </Button>
))``;

export const ButtonPrimaryOutlined = styled((props) => (
    <Button color={Theme.primary} bordercolor={Theme.primary} {...props}>
        {props.children}
    </Button>
))``;

export const ButtonSecondary = styled((props) => (
    <Button bgcolor={Theme.secondary} {...props}>
        {props.children}
    </Button>
))``;

export const ButtonSecondaryOutlined = styled((props) => (
    <Button color={Theme.secondary} bordercolor={Theme.secondary} {...props}>
        {props.children}
    </Button>
))``;

export const ButtonSuccess = styled((props) => (
    <Button bgcolor={Theme.success} {...props}>
        {props.children}
    </Button>
))``;

export const ButtonSuccessOutlined = styled((props) => (
  <Button color={Theme.success} bordercolor={Theme.success} {...props}>
      {props.children}
  </Button>
))``;

export const ButtonError = styled((props) => (
    <Button bgcolor={Theme.error} {...props}>
        {props.children}
    </Button>
))``;

export const ButtonErrorOutlined = styled((props) => (
  <Button color={Theme.error} bordercolor={Theme.error} {...props}>
      {props.children}
  </Button>
))``;