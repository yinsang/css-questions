import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
import { Routes, HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import Question0 from './questions/0';
// import Question1 from './questions/1';
// import Question2 from './questions/2';
import Menu from './Menu';
import QuestionWrapper from './QuestionWrapper';
import { questions } from './question-config';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
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
