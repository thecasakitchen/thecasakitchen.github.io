import React, {useState} from "react";

import { NavSubBar, Container, FlexRow, FlexColumn, CircularButton, ArrowIcon, MenuImage, Theme } from "./../Styles";
import { ImageContainer, ButtonContainer } from "./style";

import { MenuArray } from "../Utils";

const Menu = (props) => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <React.Fragment>
            <NavSubBar>Menu</NavSubBar>
            <Container style={{margin:"0"}}>
                <FlexRow>
                    <FlexColumn>
                        <ImageContainer>
                            <MenuImage src={MenuArray[currentPage]} alt="Menu" />
                        </ImageContainer>
                    </FlexColumn>   
                </FlexRow>
                <FlexRow style={{margin:"0 auto"}}>
                    <ButtonContainer>
                        <CircularButton 
                            bgcolor={Theme.secondary}
                            disabled={currentPage===0}
                            onClick={() => setCurrentPage(currentPage - 1>=0 ? currentPage - 1 : 0)}
                        >
                            <ArrowIcon direction="left" />
                        </CircularButton>
                        {currentPage+1}/{MenuArray.length}
                        <CircularButton 
                            bgcolor={Theme.secondary}
                            disabled={currentPage===MenuArray.length-1}
                            onClick={() => setCurrentPage(currentPage + 1 < MenuArray.length ? currentPage + 1 : MenuArray.length)}
                        >
                            <ArrowIcon direction="right" />
                        </CircularButton>
                    </ButtonContainer>
                </FlexRow>
            </Container>
        </React.Fragment>
    );
};

export default Menu;