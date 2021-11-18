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
      line-height 可以为字体倍数。通常是同时设置font-size后line-height。以达到自动撑起高度的目的
    </h3>
    <div styleName='answer'>
      1
    </div>
      <h3>
        line-height 可以为固定px。固定px一般不建议使用，会导致用户设置字体太大时导致变形或堆积
      </h3>
      <div styleName='answer1'>
        1
      </div>
      <br />
      <div styleName='answer1-error'>
        1
      </div>
    </div>
  );
};

export default Box;
