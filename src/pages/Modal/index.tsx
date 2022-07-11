import React from 'react';
import { Button, Card,Modal } from 'antd';
// 国际化
import {ConfigProvider} from "antd"
import zhCN from "antd/lib/locale/zh_CN"
const Index = () => {
  const openModal = () => {
    Modal.confirm({
        title:"一个Modal的测试"
    })
  };
  return (
    <ConfigProvider locale={zhCN}>
      <Button
        type="primary"
        onClick={() => {
          openModal();
        }}
      >
        弹窗
      </Button>
    </ConfigProvider>
  );
};
export default Index;
