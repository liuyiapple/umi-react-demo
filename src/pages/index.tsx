import styles from './index.less';
// import Component from './user/login/ModalComponent';
import ModalComponent from "./Modal/index"
import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
// 国际化
import { ConfigProvider } from 'antd';

const IndexPage:React.FC = (): JSX.Element => {
  return (
    <ConfigProvider locale={zhCN}>
      {/* <Component /> */}
      <ModalComponent/>
    </ConfigProvider>
  );
};
export default IndexPage;
