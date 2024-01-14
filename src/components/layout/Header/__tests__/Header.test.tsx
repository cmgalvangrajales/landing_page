import { render, screen } from '@config/tests/utils';

import Header from '../index';

const defaultComponent = <Header />;

describe('<Header />', () => {
  test('Home button exists', () => {
    render(defaultComponent);
    const buttonItem = screen.getByText('ZARA');

    expect(buttonItem).toBeInTheDocument();
  });

  test('Home button click event has href', () => {
    render(defaultComponent);
    const buttonItem = screen.getByRole('link', { name: /zara/i });

    expect(buttonItem).toHaveAttribute('href', '/');
  });
});
