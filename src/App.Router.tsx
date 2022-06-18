import HomeRouter from './Pages/Home/Home.Router';
import React, { Fragment } from 'react';
import Layout from './Layouts/Layout';
import { RouteWrapper } from './Routers/RouteWrapper';

const AppRouter = () => {
  return (
    <Fragment>
      <Layout>
        <RouteWrapper Render={HomeRouter} base="/" />
      </Layout>
    </Fragment>
  );
};

export default AppRouter;
