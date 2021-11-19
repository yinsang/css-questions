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
        try-child这个classname的名字，在scss里写全，不要用& 拼接。
        一般拼接只用于伪元素。例如&::after
      </h3>
      <div styleName='try'>
        <div styleName='try-child'>try-child</div>
      </div>
      <h3>
        下面这种写法不建议。因为如果要修改child的样式，搜索"try-child"是搜索不到的。在长scss样式表里很容易重复定义css或者引起样式冲突
      </h3>
      <div styleName='try1'>
        <div styleName='try1-child'>try-child</div>
      </div>
    </>
  );
};

export default Box;
