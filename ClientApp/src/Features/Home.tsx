import { RouteComponentProps } from '@reach/router';
import React from 'react';

type HomeProps = RouteComponentProps;

export const Home: React.FC<HomeProps> = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
