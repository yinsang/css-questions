import React, { useState, useEffect, useCallback } from 'react';
import './answer.module.scss';
import { useLocation } from 'react-router-dom';
import { log, request, setSearchParams, getSearchParams } from '@ali/sm-toolkit';

interface Props {

}
const Box = ({ answerClass }: Props) => {
  // window initial data

  // states
  const location = useLocation();
  console.log(location, 'location');

  // location hooks

  // functions

  // useEffect hooks

  // classVariables
  // render
  return (
    <>
      <h3>
        利用父元素text-align:center 时，子行内元素自动居中的原理
      </h3>
      <div styleName='try try0'>

        <img styleName='head-img' src='https://cdn.sm.cn/static/21/06/25/f1592238c6c424684c95e3bdc4178c83.png' alt='' />
      </div>
      <h3>
        子元素block时，利用margin auto特性进行居中
      </h3>
      <div styleName='try try1'>
        <img styleName='head-img' src='https://cdn.sm.cn/static/21/06/25/f1592238c6c424684c95e3bdc4178c83.png' alt='' />
      </div>
      <h3>
        flex大法好！flex方向默认时横向。用内容居中
      </h3>
      <div styleName='try try2'>

        <img styleName='head-img' src='https://cdn.sm.cn/static/21/06/25/f1592238c6c424684c95e3bdc4178c83.png' alt='' />
      </div>
    </>
  );
};

export default Box;
