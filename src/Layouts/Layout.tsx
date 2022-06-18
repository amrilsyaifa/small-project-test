import React from 'react';
import { Layout as AntdLayout } from 'antd';
import 'antd/dist/antd.min.css';
import Style from './Layout.module.scss';

const { Content } = AntdLayout;

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={Style['layout-content']}>
      <AntdLayout>
        <div className={Style['container']}>
          <Content style={{ padding: '0 50px' }}>
            <div className={Style['site-layout-content']}>{children}</div>
          </Content>
        </div>
      </AntdLayout>
    </div>
  );
};

export default Layout;
