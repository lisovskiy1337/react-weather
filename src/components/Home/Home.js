import React from 'react'
import Display from '../Display/Display'
import Sidebar from '../Sidebar/Sidebar'
import { StyledBackground, Wrap } from './HomeElements'
import useForecast from '../../hooks/useForecast'
import PropTypes from 'prop-types';




const Home = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const submitSearch = value => {

        submitRequest(value);
    }

    // Home.propTypes = {
    //     forecast: PropTypes.shape({
    //         currentDay: PropTypes.object,
    //         currentDayDetails: PropTypes.array
    //     })
      
    // }
    
    return (
        
        <div>  
        <Wrap>
            <StyledBackground autoPlay="autoPlay" muted loop>
                <source src="./videos/rain.mp4" type="video/mp4" />
            </StyledBackground>
            <Display 
            // {...forecast.currentDay}
            />
        </Wrap>
       
        <Sidebar 
            isError={isError} 
            isLoading={isLoading} 
            submitSearch={submitSearch} 
            // {...forecast.currentDayDetails}
        />
        
       
        </div>
    )
}





export default Home
