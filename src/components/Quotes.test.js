import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

describe('Snapshot', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test quotes component', () => {
  it('loading state', async () => {
    const { findByTestId } = render(<Quotes apiKey="123" />);
    const quotes = await findByTestId('quotes');
    expect(quotes.querySelector('h3').textContent).toBe('Loading...');
  });
});
