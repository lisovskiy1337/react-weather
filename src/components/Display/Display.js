import React from 'react'
import { StyledDegree, StyledDisplay, StyledWeatherImage, StyledWeatherInfo, StyledWrapper } from './DisplayElements'

 
const Display = ({weekday, date, location}) => {
    

    return (
        <StyledDisplay>
           <StyledWrapper>
               <StyledDegree>08</StyledDegree>
               <StyledWeatherInfo>
                   <h2>London</h2>
                   <p>06:09 - Sunday, 6 Oct '19</p>
               </StyledWeatherInfo>
               <StyledWeatherImage>
                   <img src="" alt="" />
                   <span>Rainy</span>
               </StyledWeatherImage>
           </StyledWrapper>
        </StyledDisplay>
    )
}

export default Display
