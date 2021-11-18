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
        outline是一个轮廓，在css调试阶段可以设置一个线来查看各个盒模型之前的关系非常清晰明了
      </h3>
      <div styleName='answer'>
        1
      </div>
    </div>
  );
};

export default Box;
