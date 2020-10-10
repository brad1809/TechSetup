import { Link, RouteComponentProps } from '@reach/router';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
} & RouteComponentProps;

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => (
  <div>
    <div className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/goals'>Goals</Link>
    </div>
    <div>{props.children}</div>
  </div>
);
