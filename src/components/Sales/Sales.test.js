import React from 'react';
import { render } from '@testing-library/react';
import { Sales } from '.';

describe('<Sales />', () => {
    test('should render without props (Empty)', () => {
        const dataId = 'Sales';
        const { getByTestId } = render(<Sales />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

    test('should render with successfulUploads prop', () => {
        const { getByText } = render(<Sales successfulUploads={23}/>);
        expect(getByText('23 uploads')).toBeInTheDocument();
    });

    test('should render with linesSaved prop', () => {
        const { getByText } = render(<Sales linesSaved={15}/>);
        expect(getByText('15 lines')).toBeInTheDocument();
    });
})


