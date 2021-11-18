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
    <>
      <h3>
        默认盒模型。整体100px则可以利用padding和border加上内容宽度正好等于100px;
        100-（20+10）*2 = 40px
      </h3>
      <div styleName='answer'>
        1
      </div>
      <h3>
        box-sizing盒模型。将盒子固定死100px。内部怎么变都无所谓了
      </h3>
      <div styleName='answer1'>
        1
      </div>
    </>
  );
};

export default Box;
