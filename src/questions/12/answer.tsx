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
        为什么只定一个值？
        <br />
        1. 宽高是可以自动撑起的。图片通常是需要不变形。所以自适应最好的
        <br />
        2. 图片可能会替换。例如图中可能换成【夸克的便利店】。我们写死高度则直接换图就好。如果写死了width+height是不是需要再返工CSS？
        <br />
        有时需要写死宽，这个酌情决定。
      </h3>
      <img styleName='head-img' src='https://cdn.sm.cn/static/21/06/25/f1592238c6c424684c95e3bdc4178c83.png' alt='' />
    </div>
  );
};

export default Box;
