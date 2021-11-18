import React from 'react';
import { Router, Routes, BrowserRouter, Route, Switch, Link, useLocation } from 'react-router-dom';
import supportsColor from 'supports-color';
import { questions } from './question-config';


export default () => {
  // const routers = useRoutes()
  return (
    <div>
      Less is more.
      <ol start={0}>
        {
          questions.map(({ title }, index) => (
            <li
              key={title}
            >
              <Link to={`/${index}`} >
                {title}
                <input type='checkbox' checked={Boolean(localStorage.getItem(`css-study-${index}`))} readOnly disabled />
              </Link>
              <br />
            </li>
          ))
        }
      </ol>
    </div>
  );
};
