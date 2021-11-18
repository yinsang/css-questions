import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './index.scss';
import logo from './logo.svg';

const Layout = ({ route }) => {
  return (
    <div>
      <div styleName='header'>
        <img src={logo} styleName='logo' alt='logo' />
        神马移动端框架
      </div>
      <div styleName='nav'>
        <ul>
          {
            route.routes.map((r, index) => (
              <li key={index}>
                <Link to={r.path}>{r.path}</Link>
              </li>))
          }
        </ul>
      </div>
      { renderRoutes(route.routes) }
    </div>
  );
};

export default Layout;
