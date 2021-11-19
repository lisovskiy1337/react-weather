import styled from "styled-components";

export const StyledProposeList = styled.ul`
    margin: 50px 0;
`

export const StyledProposeItem = styled.li`

    &:not(:last-child){
        margin-bottom: 25px;
    }

    a {
        transition: all 0.2s ease-in-out;
    }

    a:hover{
        color: #fff;
    }
`