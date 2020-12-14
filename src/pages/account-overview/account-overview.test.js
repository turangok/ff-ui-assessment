import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

describe('<AccountOverview />', () => {
  test('renders learn react link', () => {
    render(<AccountOverview />);
    const element = screen.getByText(/Account Overview/i);
    expect(element).toBeInTheDocument();
  });

  test('should render Percentage component', () => {
    const dataId = 'Percentage';
    const { getAllByTestId } = render(<AccountOverview />);
    expect(getAllByTestId(dataId).length).toBe(2)
  });

  test('should render Sales component', () => {
    const dataId = 'Sales';
    const { getByTestId } = render(<AccountOverview />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });

  test('should render ContactInfo component', () => {
    const dataId = 'ContactInfo';
    const { getByTestId } = render(<AccountOverview />);
    expect(getByTestId(dataId)).toBeInTheDocument();
  });

})