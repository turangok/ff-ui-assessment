import React, { useMemo } from 'react';
import { formatRate } from '../../helper';
import {
  StyledAccountOverview,
  StyledPercentages,
  StyledHeader,
  StyledTitle,
  StyledContent,
} from './account-overview.styles';

import { ContactInfo, Percentage, Sales } from '../../components';

export const AccountOverview = ({ data }) => {
  const ratios = useMemo(() => {
    const uploadRatio = formatRate(
      data?.salesOverview.successfulUploads,
      data?.salesOverview.uploads
    );
    const saveRatio = formatRate(
      data?.salesOverview.linesSaved,
      data?.salesOverview.linesAttempted
    );
    return { uploadRatio, saveRatio };
  }, [data?.salesOverview]);

  return (
    <>
      <StyledAccountOverview>
        <div className="AccountOverview">
          <StyledHeader>
            <StyledTitle>Account Overview</StyledTitle>
            <ContactInfo
              name={data?.supportContact?.name}
              email={data?.supportContact?.email}
              telephone={data?.supportContact?.telephone}
            >
              My Contact Info
            </ContactInfo>
          </StyledHeader>

          <StyledContent>
            <Sales
              successfulUploads={data?.salesOverview?.successfulUploads}
              linesSaved={data?.salesOverview?.linesSaved}
            >
              My sales
            </Sales>
            <StyledPercentages>
              <Percentage ratio={ratios?.uploadRatio} desc={'UPLOAD SUCCESS'}>
                My Percentage-1
              </Percentage>
              <Percentage ratio={ratios?.saveRatio} desc={'LINES SAVED'}>
                My Percentage-2
              </Percentage>
            </StyledPercentages>
          </StyledContent>
        </div>
      </StyledAccountOverview>
    </>
  );
};

export default AccountOverview;
