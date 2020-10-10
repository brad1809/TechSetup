import { render } from '@testing-library/react';
import React from 'react';
import { Home } from './Home';

describe('<Home />', () => {
  it('renders home', () => {
    const { getByText } = render(<Home />);
    const homeElement = getByText('Home Page');

    expect(homeElement).toBeInTheDocument();
  });
});
