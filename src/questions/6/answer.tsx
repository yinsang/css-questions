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
        div不要给width:100%，因为宽度本身就是自动撑满的。
        仔细理解提示知识点中张鑫旭大神的那篇文章
      </h3>
      <div styleName='try'>
        我是中国人
      </div>
    </div>
  );
};

export default Box;
