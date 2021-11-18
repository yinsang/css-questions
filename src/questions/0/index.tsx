import React, { useState, useEffect, useCallback } from 'react';
import './index.module.scss';
import {useLocation}from 'react-router-dom'
import { log, request, setSearchParams, getSearchParams } from '@ali/sm-toolkit';

interface Props {

}
const Box = ({}: Props) => {
  // window initial data

  // states
  const location = useLocation();
  console.log(location,'location');

  // location hooks

  // functions

  // useEffect hooks

  // classVariables
  // render
  return (
    <div className='' styleName='Box'>
      <div styleName='try'>
        1
      </div>
    </div>
  );
};

export default Box;
