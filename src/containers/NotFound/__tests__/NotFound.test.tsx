import { render, screen } from '@config/tests/utils';

import NotFound from '../index';

const defaultComponent = <NotFound />;

describe('<NotFound />', () => {
  test('NotFound not found message', () => {
    render(defaultComponent);
    const code = screen.getByText('404');
    const title = screen.getByText('Pagina no encontrada');

    expect(code).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
