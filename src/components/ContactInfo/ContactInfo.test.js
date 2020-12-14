import React from 'react';
import { render } from '@testing-library/react';
import { ContactInfo } from '.';

describe('<ContactInfo />', () => {
    test('should render without props (Empty)', () => {
        const dataId = 'ContactInfo';
        const { getByTestId } = render(<ContactInfo />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

    test('should render with name prop', () => {
        const { getByText } = render(<ContactInfo name='Steve Jobs'/>);
        expect(getByText('Steve Jobs')).toBeInTheDocument();
    });

    test('should render with email prop', () => {
        const { getByText } = render(<ContactInfo email='steve@apple.com'/>);
        expect(getByText('steve@apple.com')).toBeInTheDocument();
    });

    test('should render with telephone prop', () => {
        const { getByText } = render(<ContactInfo telephone='07585 351 147'/>);
        expect(getByText('07585 351 147')).toBeInTheDocument();
    });
})


