import styled from 'styled-components';

export const StyledContactInfo = styled.div`
    height: 100%;
    color: ${(p) => p.theme.darkGray};
    font-size: 0.8rem;
    font-weight: 600;
    text-align: initial;
    margin-bottom: 2.5rem;
`;

export const StyledSupport = styled.div`
padding-left: 0.75rem;
font-weight: 900;
`;

export const StyledSupportLayout = styled.div`
    display: flex;
    margin-top: 0.63rem;
`;

export const StyledSupportLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F9CF03; 
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 10%;
    font-size: 0.9rem; 
    color: ${(p) => p.theme.black};
    font-weight: 900;
`;

export const StyledSupportInfo = styled.div`
display : grid;
grid-template-columns: 2fr 1fr;
    font-weight: normal;
    font-size: 0.75rem;
    padding-left: 0.31rem;
`;

export const StyledSupportName = styled.div`
    display: flex;
    text-align: initial;
    margin-top: 0.31rem;

`;

