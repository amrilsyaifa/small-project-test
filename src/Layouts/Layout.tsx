import React from 'react';
import { Layout as AntdLayout } from 'antd';
import 'antd/dist/antd.min.css';
import Styles from './Layout.module.scss';
import PageHeader from 'src/Reusables/Components/PageHeader';

const { Content } = AntdLayout;

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={Styles['layout-content']}>
      <AntdLayout>
        <div className={Styles['page-header-container']}>
          <div className={Styles['page-header']}>
            <PageHeader />
          </div>
        </div>
        <div className={Styles['container']}>
          <Content style={{ padding: '0 50px' }}>
            <div className={Styles['site-layout-content']}>{children}</div>
          </Content>
        </div>
      </AntdLayout>
    </div>
  );
};

export default Layout;
