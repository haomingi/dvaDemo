import React from 'react';
import { Router } from 'dva/router';
import routers from './routes/index'

function RouterConfig({ history, app }) {
  let router = routers(app)
  return <Router history={history} routes={router} />;
}

export default RouterConfig;
