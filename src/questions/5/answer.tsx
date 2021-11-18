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
    <div className='' styleName='Box'>
      <h3>
        设计给了设计稿后，一般显示bold字体的，不需要使用对应字体，直接写字重即可。
        普通400；中等500；加粗700
      </h3>
      <div styleName='try'>
        English
      </div>
      <div styleName='try1'>
        English
      </div>
      <div styleName='try2'>
        English
      </div>
    </div>
  );
};

export default Box;
