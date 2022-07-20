import styles from './index.less';
// import Component from './user/login/ModalComponent';
// 国际化
// import ModalComponent from "./Modal/index"
// List 列表
// import ListPages from "./ListPages/index"
// import FormDemo from './FormDemo';
import GlobalImageInModal from "./GlobalImageInModal"
import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
// 国际化
import { ConfigProvider } from 'antd';

const IndexPage:React.FC = (): JSX.Element => {
  return (
    <ConfigProvider locale={zhCN}>
      {/* <Component /> */}
      {/* <ModalComponent/> */}
      {/* <ListPages/> */}
      {/* <FormDemo/> */}
      <GlobalImageInModal/>
    </ConfigProvider>
  );
};
export default IndexPage;
