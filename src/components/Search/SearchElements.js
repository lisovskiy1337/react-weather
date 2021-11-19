import styled from "styled-components"


export const StyledSearchWrap = styled.div `
position: relative;
`

export const StyledSearchInputWrapper = styled.div ``


export const StyledSearchInput = styled.input.attrs({
    type: 'text',
    placeholder: 'search'
})
`
margin-top: 3px;
width: 300px;
background: transparent;
padding-top: 7px;
padding-bottom: 5px;
border: none;
outline: none;
border-bottom: 2px solid #969696;
transition: all 0.2s ease-in-out;
color: #fff;
font-size: 16px;

    ::placeholder{
        color:#ababab;
    }

    &:focus{
        border-bottom: 2px solid #5d8c8b;
    }
`

export const StyledErrorText = styled.div`
    margin-top: 5px;
    font-size: 11px;
    color: #e63a2e;
    font-weight: 800;
    letter-spacing: 0.5px;
    display: ${p => p.isError ? 'block' : 'none'};

`





export const StyledSearchBtn = styled.button `
    width: 100px;
    height: 100px;
    background: #5d8c8b;
    position: absolute;
    right: -45px;
    top: -65px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3 ease-in-out;

    &:hover{
        background: #609190;
    }

    
        
    img{
        display: ${p => p.isLoading ? 'none' : 'block'};
        width: 25px;
        height: 25px;
        
    }
    

    
`

export const StyledSpinLoading = styled.div `
  display: ${p => p.isLoading ? 'block' : 'none'};
  position: relative;
  width: 50px;
  height: 60px;
  

  div {
    display: inline-block;
    position: absolute;
    width: 6px;
    background: #fff;
    animation: lds-facebook 1.5s cubic-bezier(0, 1, 1, 1) infinite;
    border-radius: 2px;

    &:nth-child(1){
        left: 8px;
        animation-delay: -0.24s;
    }

    &:nth-child(2) {
        left: 24px;
        animation-delay: -0.12s;
    }

    &:nth-child(3) {
        left: 40px;
        animation-delay: 0;
    }


    @keyframes lds-facebook {
        0% {
            top: 8px;
            height: 36px;
            opacity: 1;
        }
        50%, 100% {
            top: 24px;
            height: 24px;
            opacity: 0.5;
        }
    }   
  }
`