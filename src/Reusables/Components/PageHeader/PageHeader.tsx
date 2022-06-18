import { Typography } from 'antd';
import React from 'react';
import Styles from './PageHeader.module.scss';
import { useLocation } from 'wouter';

const { Text } = Typography;

const PageHeader: React.FC = () => {
  const [, go] = useLocation();

  return (
    <div className={Styles['container']}>
      <div className={Styles['header-wrapper']}>
        <img src="/logo512.png" alt="logo" onClick={() => go('/')} />
      </div>
      <div className={Styles['wrapper-right-text']}>
        <div className={Styles['wrapper-text']}>
          <Text className={Styles['text']}>Login</Text>
          <Text className={Styles['text']}>Logout</Text>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
