import { render } from '@testing-library/react';
import React from 'react';
import { Layout } from './Layout';

test('renders nav links', () => {
  const result = render(<Layout>Hi people!</Layout>);
  const homeLink = result.getByText('Home');
  const goalsLink = result.getByText('Goals');

  expect(homeLink).toBeInTheDocument();
  expect(goalsLink).toBeInTheDocument();
});
