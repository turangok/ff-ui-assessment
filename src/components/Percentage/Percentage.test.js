import React from 'react';



import { render, screen } from '@testing-library/react';



import { Percentage } from '.';

describe('<Percentage />', () => {
    test('should render without props (Empty)', () => {
        const dataId = 'Percentage';
        const { getByTestId } = render(<Percentage />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

    test('should render with desc prop', () => {
        const { getByText } = render(<Percentage desc='test description'/>);
        const percentage = getByText('test description');
        expect(percentage).toBeInTheDocument();
    });

    test('should render with ratio prop', () => {
        const { getByText } = render(<Percentage ratio='33'/>);
        const percentage = getByText('33%');
        expect(percentage).toBeInTheDocument();
    });
})


