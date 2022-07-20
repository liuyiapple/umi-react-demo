import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const FormDemo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal
        visible={showModal}
        title={'这是一个延时500毫秒的Modal'}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={false}
      >
        演示Modal
      </Modal>
      <Button
        type={'primary'}
        onClick={() => {
          console.log(1);
          setTimeout(() => {
            setShowModal(true);
            console.log(2);
          }, 100);
        }}
      >点击Modal展示</Button>
    </>
  );
};
export default FormDemo;
