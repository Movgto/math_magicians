import { render, screen, act, findByTestId } from '@testing-library/react';
import Routing from './Routing';

describe('Navigation: tests proper navigation behavior when clicking links', () => {
  test('Start at home page', () => {
    render(<Routing />);
    const expected = 'Welcome to our page!';
    const welcomeMsg = screen.getByText(expected).textContent;
    expect(welcomeMsg).toBe(expected);
  });

  test('Navigation to Calculator page', () => {
    render(<Routing />);
    const calculatorLink = screen.getByText('Calculator');
    act(() => {
      calculatorLink.click()
    });
    screen.getByTestId('calculator');
  })

  test('Navigation to Quote page', () => {
    render(<Routing />);
    const quoteLink = screen.getByText('Quote');
    act(() => {
      quoteLink.click();
    });
    screen.getByTestId('quotes');
  });
});