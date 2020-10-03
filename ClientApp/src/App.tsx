import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Layout } from './Features/Layout';
import { Home } from './Features/Home';
import { Goals } from './Features/Goals';
import { NotFound } from './Features/NotFound';

export const App = () => (<div>
  <Router>
    <Layout path="/">
      <Home path="/" />
      <Goals path="goals" />
    </Layout>
    <NotFound default />
  </Router>
</div>)
