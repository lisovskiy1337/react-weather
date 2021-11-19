import React, {useState} from 'react'
import { StyledSearchInput, StyledSearchInputWrapper, 
    StyledSearchWrap, StyledErrorText,
    StyledSpinLoading, 
    StyledSearchBtn } from './SearchElements'

const Search = ({isError, isLoading, submitSearch}) => {

    const [location, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        // if (!location || location === '') return;
        submitSearch(location);
        setLocation('');
    }

    return (
        <StyledSearchWrap>
            <form onSubmit={onSubmit}>
                <StyledSearchInputWrapper>
                    <StyledSearchInput value={location} onChange={e => setLocation(e.target.value)}></StyledSearchInput>
                    <StyledErrorText isError={isError}>Somethehing went wrong!</StyledErrorText>
                </StyledSearchInputWrapper>
                <StyledSearchBtn onClick={onSubmit}>  
                        <img 
                            src="./images/search.png" 
                            alt=""
                            isLoading={isLoading}
                            
                        />            
                    <StyledSpinLoading isLoading={isLoading}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </StyledSpinLoading>
                </StyledSearchBtn>
            </form>
        </StyledSearchWrap>
    )
}

export default Search
