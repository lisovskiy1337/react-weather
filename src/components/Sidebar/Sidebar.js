import React from 'react'
import FastSearch from '../FastSearch/FastSearch'
import Search from '../Search/Search'
import Details from '../Details/Details'
import { StyledSidebar } from './SidebarElements'
import Display from '../Display/Display'

const Sidebar = ({isError, isLoading, submitSearch}) => {
    return (
        <StyledSidebar>
            <Search isError={isError} isLoading={isLoading} submitSearch={submitSearch}/>
            <FastSearch/>
            <Details/>
           
            
        </StyledSidebar>
    )
}

export default Sidebar
