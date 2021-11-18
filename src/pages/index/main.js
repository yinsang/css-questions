import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { log } from '@ali/sm-toolkit';
import '@babel/polyfill';

import routesConfig from './router/index';
import '@pages/common/index';

// 打点
// 文档：https://yuque.antfin.com/sm-frontend/zz90s9/fsq2r3
log.init();

ReactDOM.render(
  <Router>
    {renderRoutes(routesConfig)}
  </Router>,
  document.getElementById('app')
);
