import React from 'react'
import { StyledContainer, StyledHeader, StyledInput, StyledInputWrap, StyledLogo, StyledNavbar, StyledSearchBtn } from './HeaderElements'

const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledNavbar>
                    <StyledLogo>Weather App</StyledLogo>
                    <StyledInputWrap>
                        <StyledInput></StyledInput>
                    </StyledInputWrap>
                  
                   
                </StyledNavbar>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
