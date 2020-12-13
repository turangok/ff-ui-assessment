import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { StyledSales, StyledSalesLeft, StyledSalesRight, StyledSalesInfo, StyledSalesHeading, StyledIcon} from './Sales.styles'
import theme from '../../theme';

export const Sales = ({successfulUploads, linesSaved}) => {
    return (
        <StyledSales>
            <StyledSalesHeading>
                <StyledSalesLeft>
                    <StyledIcon icon={faUpload} color="#3EB1EB" />
                     Sales
               </StyledSalesLeft>
                <StyledSalesRight>
                    <FontAwesomeIcon icon={faInfoCircle} color="lightgray" />
                </StyledSalesRight>
            </StyledSalesHeading>
            <StyledSalesInfo>
               <span>You had <span style={{color: theme.dimGray}}>{successfulUploads} uploads</span>  and <span style={{color: theme.dimGray}}>{linesSaved} lines</span> added. </span> 
            </StyledSalesInfo>
        </StyledSales>
    );

} 