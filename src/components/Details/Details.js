import React from 'react'
import { StyledDetailItem, StyledDetailList, StyledDetails, StyledTitle } from './DetailsElements'

const Details = () => {
    return (
        <StyledDetails>
            <StyledTitle>Weather Details</StyledTitle>
            <StyledDetailList>
                <StyledDetailItem>something <span>lalala</span></StyledDetailItem>
                <StyledDetailItem>something <span>lalala</span></StyledDetailItem>
                <StyledDetailItem>something <span>lalala</span></StyledDetailItem>
                <StyledDetailItem>something <span>lalala</span></StyledDetailItem>
            </StyledDetailList>
        
        </StyledDetails>
    )
}

export default Details
