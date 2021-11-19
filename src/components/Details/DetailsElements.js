import styled from "styled-components";


export const StyledDetails = styled.div`
    padding: 45px 0;
    border-top: 2px solid #969696;
    border-bottom: 1px solid #969696;
`

export const StyledTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    letter-spacing: 1.5px;
`

export const StyledDetailList = styled.ul`
    margin-top: 50px;
`

export const StyledDetailItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: #ababab;
    }

    span {
        color: #fff;
    }

    &:not(:last-child){
        margin-bottom: 25px;
    }
`