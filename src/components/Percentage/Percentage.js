import React from 'react'; 
import PropTypes from 'prop-types';

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

Percentage.propTypes = {
    desc: PropTypes.string,
    ratio: PropTypes.number,
};
