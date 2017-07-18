import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Demo from './routes/Demo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/products" component={Products} />
      <Route path="/demo" component={Demo} />
    </Router>
  );
}

export default RouterConfig;
