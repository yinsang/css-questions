import React, { useState, useEffect, useCallback } from 'react';
import './answer.scss';
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
        层叠样式表最基础的就是优先级。
        优先级提升最常用的就是嵌套方式了。加一层父元素是否能解决呢？
        注意覆盖antd的内部样式,常常在 .scss里而不是在 .module.scss里。
        因为编译了hash后class名字就对不上了。
        <br />
        每个需要覆盖组件库样式的项目，都需要有个ui-component-reset.scss全局引入来做覆盖。放在一起更容易避免引起覆盖上的冲突。
      </h3>
      <div className='antd-modal-customer-wrapper'>
        不用important怎么修改antd-modal里的背景色呢？
        <div className='antd-modal'>
          一个弹窗
        </div>
      </div>
    </div>
  );
};

export default Box;
