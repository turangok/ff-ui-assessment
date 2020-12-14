import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { StyledContactInfo, StyledSupport, StyledSupportLayout, StyledSupportLogo, StyledSupportInfo, StyledSupportName } from './ContactInfo.styles'

export const ContactInfo = ({name, email, telephone}) => {
    return (
        <StyledContactInfo data-testid='ContactInfo'>
           <span>YOUR FEEFO SUPPORT CONTACT</span>
            <StyledSupportLayout>
                <StyledSupportLogo>S</StyledSupportLogo>
                <StyledSupport>
                    {name}
                    <StyledSupportName>
                        <FontAwesomeIcon icon={faEnvelope} color="gray"/>
                        <StyledSupportInfo><span>{email}</span><span>{telephone}</span></StyledSupportInfo>
                    </StyledSupportName>
                </StyledSupport>
            </StyledSupportLayout>
        </StyledContactInfo>
    );

} 

ContactInfo.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
};
