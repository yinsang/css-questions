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
        在flex的盒模型中，子元素 flex:1 会平分盒子宽度。试试一个是2一个是1 呢？
      </h3>
      <div styleName='try'>
        <div styleName='child'>1</div>
        <div styleName='child'>2</div>
      </div>
    </div>
  );
};

export default Box;
