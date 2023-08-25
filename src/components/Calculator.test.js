import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Snapshot', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Calculator Component', () => {
  it('renders without errors', () => {
    render(<Calculator />);
  });

  // Test button clicks and interactions
  it('updates state on button click', () => {
    const { getByText } = render(<Calculator />);
    const seven = getByText('7'); // Change this to the label of the button you want to test
    const plus = getByText('+');
    const equals = getByText('=');
    fireEvent.click(seven);
    fireEvent.click(plus);
    fireEvent.click(seven);
    fireEvent.click(equals);
    getByText('14');
    // Add assertions to check if the state has been updated as expected
  });

  // Add more test cases for other interactions
});
