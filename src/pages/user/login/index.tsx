import React, { useEffect, useState } from 'react';
import ModalComponent from './ModalComponent';
import { Card, Form, Button } from 'antd';
import { ItemType } from './types';
import styles from './index.module.less';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [policyFileDetail, setPolicyFileDetail] = useState({});
  const [policyFile, setPolicyFile] = useState<ItemType[]>([]);
  const showModal = () => {
    setVisible(!visible);
  };
  const cancelClick = () => {
    setVisible(false);
  };

  // 删除
  const deletePoliceFile = (id: number) => {
    let newPoliceFile = JSON.parse(JSON.stringify(policyFile));
    let policeFileId = newPoliceFile.findIndex((el: ItemType) => el.id === id);
    console.log(policeFileId);
    newPoliceFile.splice(policeFileId, 1);
    setPolicyFile(newPoliceFile);

  };
  // 编辑
  const editPoliceFile = (id: number) => {
    // console.log(id);
    setVisible(true);

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
          handleOk={(value: ItemType) => {
            // @ts-ignore
            setPolicyFile(value);
            setVisible(false);
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
                <div>
                  {item.upload_ins}
                </div>
                <div>
                  <EditOutlined
                    style={{ marginRight: 10 }}
                    onClick={() => {
                      editPoliceFile(item.id)
                      // console.log(item);
                      setPolicyFileDetail(item)
                    }}
                  />
                  <DeleteOutlined onClick={(e) => {
                    // console.log(item);
                    deletePoliceFile(item.id);
                  }} />
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
