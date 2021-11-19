import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    background-color: rgba(56, 56, 56, 0.1);
    position: fixed;
    z-index: 99;
`

export const StyledContainer = styled.div`
    max-width: 1330px;
    margin: 0 auto;
    padding: 0 15px;

`

export const StyledNavbar = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledLogo = styled.div`
color: #fff;
font-size: 26px;`

export const StyledInputWrap = styled.div`
    position: relative;
`

export const StyledInput = styled.input.attrs({
    type: "text",
    placeholder: "Search"
})` 
    display: block;
    outline: none;
    border: none;
    padding: 10px 10px 10px 35px;
    width: 250px;
    border-radius: 16px;

    @media screen and (max-width: 500px){
        width: 200px;
    }
`

