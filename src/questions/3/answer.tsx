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
      直接给第二个元素加上class。
      class既能说明元素是干什么的，也能更快的在DOM查询中找到，性能最好。
      </h3>
      <div styleName='answer'>
        <span>更换</span>
        <span styleName='unbind'>解绑</span>
      </div>
        <h3>
          很多同学喜欢写nth。坏处非常多。如果中间又插了一个按钮呢？谁也不能保证业务不加需求
        </h3>
        <div styleName='answer-error'>
          <span>更换</span>
          <span>插入的某元素</span>
          <span styleName='unbind'>解绑</span>
        </div>
    </div>
  );
};

export default Box;
