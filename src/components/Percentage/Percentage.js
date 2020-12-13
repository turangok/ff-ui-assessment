import React from 'react'; 
import {StyledPercentage, StyledPercentageVal} from './Percentage.styles'
export const Percentage = ({desc, ratio}) => {
    return (
        <StyledPercentage data-testid='Percentage'> 
            <StyledPercentageVal>
                {ratio}%
            </StyledPercentageVal>
            {desc}
        </StyledPercentage>
    );

} 