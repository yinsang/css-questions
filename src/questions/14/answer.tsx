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
      <h3>
        图片上放文字的场景。非常适合用background-image。
        如果直接就绝对定位，那代码量既大，重构起来又困难，还需要计算位置。非常繁琐。
        <br />
        学会利用文档流去布局，尽量少的使用float、absolute等脱离文档流的方式。
      </h3>
      <nav styleName='banner-inner'>
        <h2 styleName='title'>让创作被看到，让分享有价值</h2>
      </nav>
    </div>
  );
};

export default Box;
