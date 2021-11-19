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
        只设置padding-top。
        如果只给desc一个padding: 10px 0;的话，当需求变更需要删掉desc时，css一定是要重构的。
        <br />
        一般元素的上面空白是跟随当前元素的。所以只给padding-top就好。最后一个元素需要使用padding-bottom 或者父元素的padding-bottom来撑起。
        <br />
        尽量少用margin去撑起高度。
      </h3>
      <div styleName='try'>
        设置 title、desc、info之间垂直距离都为10px
        <div styleName='title'>title</div>
        <div styleName='desc'>desc</div>
        <div styleName='info'>
          info
        </div>
      </div>
    </>
  );
};

export default Box;
