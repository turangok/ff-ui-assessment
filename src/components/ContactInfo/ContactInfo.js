import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StyledContactInfo, StyledSupport, StyledSupportLayout, StyledSupportLogo, StyledSupportInfo, StyledSupportName } from './ContactInfo.styles'

export const ContactInfo = ({name, email, telephone}) => {
    return (
        <StyledContactInfo>
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