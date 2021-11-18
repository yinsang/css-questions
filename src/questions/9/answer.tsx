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
    <div className='box'>
      <h3>
        flex和margin-left:auto 结合可以使元素右对齐。具体原因可以自己研究。
        为什么不用float呢？float脱离了文档流。会造成各种各样的问题，可以自己研究。
      </h3>
      <div styleName='try'>
        <img styleName='head-img' src='https://img0.baidu.com/it/u=1489807627,808259306&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg' alt='' />
      </div>
    </div>
  );
};

export default Box;
