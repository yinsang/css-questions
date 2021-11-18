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
    <div styleName='try'>
      <img styleName='head-img' src='https://img0.baidu.com/it/u=1489807627,808259306&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg' alt='' />
    </div>
  );
};

export default Box;
