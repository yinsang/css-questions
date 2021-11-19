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
        利用继承关系。只需要设置父元素。父元素写了字体之后，子元素自动继承。甚至伪元素也继承了呢！不必每个结构都写一遍font-family。
        <br />
        一般的开发都是给body一个font-family。
        给特殊模块一个font-family。

        在给特殊字体一个font-family。
        <br />

        用到字体的地方非常少，都是全局定义的。
        同样特性的例如color、letter-spacing line-height等。善于利用css的继承，能少些很多代码
      </h3>
      <div styleName='try'>
        father 父元素里面的字体
        <div styleName='child'>
          child 儿子字体
        </div>
      </div>
    </div>
  );
};

export default Box;
