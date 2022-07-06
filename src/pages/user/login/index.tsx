import React, { useEffect, useState } from 'react';
import ModalComponent from './ModalComponent';
import { Card, Form, Button } from 'antd';
import { ItemType } from './types';
import styles from './index.module.less';

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [policyFileDetail, setPolicyFileDetail] = useState({})
  const [policyFile, setPolicyFile] = useState([])
  const showModal = () => {
    setVisible(!visible);
  };
  const cancelClick = () => {
    setVisible(false);

  };
  // 拿到表单的值
  return (
    <Card>
      <Form>
        <Button
          type={'primary'}
          onClick={() => {
            setIsShowModal(!isShowModal);
          }}
        >
          展示添加按钮
        </Button>
      </Form>
      {
        isShowModal &&
        <ModalComponent
          visible={visible}
          showModal={showModal}
          cancelClick={cancelClick}
          policyFile={policyFile}
          handleOk={(value) => {
            setPolicyFile(value)
            setVisible(false)
          }}
          policyFileDetail={policyFileDetail}
        />
      }
      <Form.Item>
        {
          policyFile.length > 0 &&
          policyFile.map((item: ItemType) => {
            return (
              <div className={styles.fileData}>
                <div>
                  {item.text_name}
                </div>
              </div>
            );
          })
        }
      </Form.Item>

    </Card>
  );
};
export default Login;
