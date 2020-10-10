import { Router } from '@reach/router';
import React from 'react';
import './App.css';
import { Goals } from './Features/Goals';
import { Home } from './Features/Home';
import { Layout } from './Features/Layout';
import { NotFound } from './Features/NotFound';

export const App: React.FC = () => (
  <div>
    <Router>
      <Layout path='/'>
        <Home path='/' />
        <Goals path='goals' />
      </Layout>
      <NotFound default />
    </Router>
  </div>
);
