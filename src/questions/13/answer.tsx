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
    <div>
      <div styleName='try'>
        <h3>最好给对应的按钮设置class。如果直接设置在span标签上，那有可能造成再加span时还需要重构。</h3>
        <span styleName='button'>确定</span>
        <span styleName='button'>取消</span>
      </div>
      <div styleName='try-errror'>
        <h3>有时会用X做关闭按钮。这不就不符合预期了吗？</h3>
        <span >确定</span>
        <span >取消</span>
        <span >X</span>
      </div>
    </div>
  );
};

export default Box;
