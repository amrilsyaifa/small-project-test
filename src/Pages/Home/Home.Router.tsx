import React from 'react';
import { Route } from 'wouter';
import PageRouter, { IPageRouter } from '../../Routers/PageRouter';
import Home from './Home';

const HomeRouter: React.FC<IPageRouter> = (props) => {
  return (
    <PageRouter {...props}>
      <Route path="/">
        <Home />
      </Route>
    </PageRouter>
  );
};

export default HomeRouter;
