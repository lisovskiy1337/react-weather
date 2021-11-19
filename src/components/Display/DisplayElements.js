import styled from "styled-components";

export const StyledDisplay = styled.div`
    height: 100%;
    display: flex;
    padding: 100px calc(6vw - 5px);
    
`

export const StyledWrapper = styled.div`
    margin-top: auto;
    display: flex;
    /* align-items: center; */
    color: #fff;
`

export const StyledDegree = styled.span`
    font-size: 120px;
    
    letter-spacing: 2px;
    line-height: 100%;

`

export const StyledWeatherInfo =  styled.div`
    margin-left: 50px;
    h2{
        font-size: 46px;
      
    }

    p{
        font-size: 18px;
         
    }
`

export const StyledWeatherImage = styled.div`
    margin-left: 50px;
   
    img {
        width: 55px;
        height: 55px;
        display: block;
        margin-bottom: 14px;
    }
`