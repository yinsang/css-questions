import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Routes, HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import QuestionWrapper from './QuestionWrapper';
import { questions } from './question-config';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path='/' component={Menu} exact />
      {
        questions.map(({ component, AnswerComponent, title }, index) => (
          <Route
            key={title}
            path={`/${index}`}
            component={
              () => (<QuestionWrapper
                Question={component}
                AnswerComponent={AnswerComponent}
              />)
            }
          />
        ))
      }
    </HashRouter>
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: 0,
      right: 0,
      textAlign: 'center'
    }}
    >copyright by yinpeng.wyp@alibaba-inc.com
    </div>
  </React.StrictMode>,
  document.getElementById('app')
);
