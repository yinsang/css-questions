import React, { useState, useEffect, useCallback } from 'react';
import './answer.module.scss';
import {useLocation}from 'react-router-dom'
import { log, request, setSearchParams, getSearchParams } from '@ali/sm-toolkit';

interface Props {

}
const Box = ({answerClass}: Props) => {
  // window initial data

  // states
  const location = useLocation();
  console.log(location,'location');

  // location hooks

  // functions

  // useEffect hooks

  // classVariables
  // render
  return (
    <div className='' styleName='Box'>
      <h3>
      直接给child 一个padding-top。
      </h3>
      <div styleName='try'>
      <div styleName="child">
        1
      </div>
    </div>

    <h3>
      为什么不给margin-top。你可能听过父子元素margin坍塌、兄弟元素重叠的事情。
      这只是margin造成的问题之一。所以能给padding的别给margin
      </h3>
      <div styleName="box">
      <div styleName='try-answer'>
        <div styleName="child">
          1
        </div>
      </div>
        
      </div>

    <h3>
      如果有背景呢？padding是不是就不适用了？不是。加一层嵌套不就好了！记得html与css的黄金搭档搭配。
      </h3>
      <div styleName="box">
      <div styleName='try-answer1'>
        <div styleName="child-wrapper">
          <div styleName="child">
            1
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default Box;
