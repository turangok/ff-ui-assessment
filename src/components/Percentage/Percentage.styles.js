import styled from 'styled-components';

export const StyledPercentage = styled.div`
    height: 5rem;
    width: 100%;
    background-color:  ${(p) => p.theme.white};
    text-align: initial;
    padding: 0.94rem 1.25rem 0 1.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    color:  ${(p) => p.theme.darkGray};
`;

export const StyledPercentageVal = styled.div`
    color: ${(p) => p.theme.green};
    font-size: 2rem;
    font-weight: 600;
`;