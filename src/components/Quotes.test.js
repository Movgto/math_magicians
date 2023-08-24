import { render } from '@testing-library/react';
import Quotes from './Quotes';

describe('Test quotes component', () => {
  it('loading state', async () => {
    const { findByTestId } = render(<Quotes apiKey="123" />);
    const quotes = await findByTestId('quotes');
    expect(quotes.querySelector('h3').textContent).toBe('Loading...');
  });
});
