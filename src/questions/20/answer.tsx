import React, { useState, useEffect, useCallback } from 'react';
import './global-reset.scss';
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
        一般一个项目的reset是通用的。例如某个button不需要outline和border；
        不应该每个button都写一遍
        outline:none;
        border:none;
      </h3>
      <div className='root' styleName='try'>
        <button>确定</button>
      </div>
    </>
  );
};

export default Box;
