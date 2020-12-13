import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

export const StyledSales = styled.div`
    background-color: ${(p) => p.theme.white};
    text-align: initial;
    padding: 1.25rem;
`;

export const StyledSalesHeading = styled.div`
    display: flex; 
    justify-content: space-between;
    `;

export const StyledIcon = styled(FontAwesomeIcon)`
    margin-right: 0.63rem;
`;

export const StyledSalesLeft = styled.div`
    font-weight: 600;
    font-size: 0.95rem;
    color: ${(p) => p.theme.dimGray};
    `;

export const StyledSalesRight = styled.div`
`;

export const StyledSalesInfo = styled.div`
margin-top: 0.94rem;
font-size: 0.8rem;
font-weight: 600;
color: ${(p) => p.theme.darkGray};
`;