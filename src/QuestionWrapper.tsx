import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { log, request, setSearchParams, getSearchParams } from '@ali/sm-toolkit';
import './QuestionWrapper.module.scss';
import Menu from './Menu';
import { questions } from './question-config';

interface Props {
  Question:React.Component;
  AnswerComponent:React.Component;
}
const QuestionWrapper = ({ Question, AnswerComponent }: Props) => {
  // window initial data

  const location = useLocation();
  // states
  const [showTips, setShowTips] = useState(false);
  const [isKnow, setIsKnow] = useState(Boolean(localStorage.getItem(`css-study-${location.pathname.slice(1)}`)));

  // location hooks
  const [showAnswer, setShowAnswer] = useState(false);
  // functions
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const handleTips = () => {
    setShowTips(!showTips);
  };
  const handleAlreadyKnow = () => {
    setIsKnow(!isKnow);
    if (isKnow) {
      localStorage.removeItem(`css-study-${location.pathname.slice(1)}`);
    } else {
      localStorage.setItem(`css-study-${location.pathname.slice(1)}`, '1');
    }
  };
  // useEffect hooks

  // classVariables

  // render

  return (
    <div>
      <h4>
        {questions[location.pathname.slice(1)].title}
      </h4>
      <Question />
      <hr />
      <button onClick={handleTips}>
        {
          showTips ? '隐藏' : '提示'
        }
        知识点
      </button>
      <button onClick={toggleAnswer}>

        {
          showAnswer ?
            '隐藏' :
            '显示'
        }
        答案
      </button>
      <button onClick={handleAlreadyKnow}>
        {
          `标记为${isKnow ? '未' : '已'}学会`
        }
        <input styleName='checkbox' type='checkbox' checked={isKnow} readOnly disabled />
      </button>

      <Link to='/'>

        <button >
          回到主页
        </button>
      </Link>
      <hr />
      {showTips
      &&
      <ol>
        {
          questions[location.pathname.slice(1)].tips.map(item => (
            <li>
              <a href={item} target='_blank' key={item} rel='noreferrer'>
                {item}
              </a>
            </li>

          ))
        }
      </ol>
      }

      {
        showAnswer &&
        <AnswerComponent />
      }
    </div>
  );
};

export default QuestionWrapper;
