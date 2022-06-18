import { Spin } from 'antd';
import React from 'react';
import Styles from './Loading.module.scss';

const Loading: React.FC = () => (
  <div className={Styles['wrapper']}>
    <Spin tip="Loading..." />
  </div>
);

export default Loading;
