import React, { useEffect, useState } from 'react';
import { Form, Card, Button, Modal, Input, Radio, Upload, Select, InputNumber, Checkbox } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { OptionsType, ItemType } from '@/pages/user/login/types';
import styles from './index.module.less';

const Login = (props: any): JSX.Element => {
  const { showModal, visible, cancelClick, policyFile, handleOk, policyFileDetail } = props;
  const [form] = Form.useForm();
  // 看看当前的操作是否为编辑操作
  const isEdit: boolean = Object.keys(policyFileDetail).length > 0;
  // 定义一个变量用来存储当前提交的表单数据
  const onFinish = (value: ItemType) => {
    let newValues = { ...policyFileDetail, ...value };
    let newPolicyFile = JSON.parse(JSON.stringify(policyFile));
    if (isEdit) {
      let newPoliceFileValue = newPolicyFile.findIndex((ele: ItemType) => ele.id === newValues.id);
      newPolicyFile.splice(newPoliceFileValue, 1, newValues);
    } else {
      newPolicyFile.push({ ...newValues, id: policyFile.length + 1 });
    }
    handleOk(newPolicyFile);
    cancelClick();
    // 完成编辑之后，对表单做清空操作
    restForm();
  };
  // 迪阿尼
  const restForm = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        file_format: policyFileDetail?.file_format,
        file_type: policyFileDetail?.file_type,
        files_req: policyFileDetail.files_req,
        file_limit: policyFileDetail?.file_limit,
        size: policyFileDetail?.size,
        num: policyFileDetail?.num,

        radio_name: policyFileDetail?.radio_name,
        text_name: policyFileDetail?.text_name,
        upload_ins: policyFileDetail?.upload_ins,
        id: policyFileDetail?.id,
      });
    }
  });

  const options: OptionsType[] = [
    { label: 'word', value: '1' },
    { label: 'excel', value: '2' },
    { label: 'ppt', value: '3' },
    { label: 'jpg', value: '4' },
    { label: 'jpeg', value: '5' },
    { label: 'png', value: '6' },
  ];
  return (
    <Card>
      {policyFile.length < 5 && <Button
        onClick={() => {
          showModal();
        }}
        className={styles.showModalBtn}
        icon={<PlusOutlined />}
      >添加</Button>}
      <Modal
        visible={visible}
        footer={false}
        onCancel={cancelClick}
        title={'添加上传文件设置'}
        width={650}
        className={styles.container}
      >
        <Form
          onFinish={onFinish}
          form={form}

        >
          <Form.Item
            label={'字段名称'}
            name={'text_name'}
            rules={[{
              required: true,
              message: '请输入字段名称',
            }]}
          >
            <Input placeholder={'请输入'} />
          </Form.Item>
          <Form.Item
            label={'是否必传'}
            name={'radio_name'}
            required={true}
            initialValue={1}
          >
            <Radio.Group>
              <Radio value={1} defaultChecked={true}>必传</Radio>
              <Radio value={2}>非必传</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={'上传模板'}
            name={'file_type'}
            valuePropName='fileList'
            extra={
              <span style={{ color: '#bfbfba' }}>给用户提供的模版文件</span>
            }

          >
            <Upload>
              <Button icon={<UploadOutlined />}>文件上传</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label={'上传说明'}
            name={'upload_ins'}
            extra={
              <div>
                示例：点击下载《****》，填写盖章后上传。 <br />
                注：《****》系统会自动识别你上传的模版名称，无须编辑。
              </div>
            }
            rules={[{
              required: true,
              message: '请填写上传说明',
            }]}

          >
            <Input.TextArea placeholder={'请输入'} />
          </Form.Item>
          <Form.Item
            name={'files_req'}

          >
            <div style={{ display: 'flex' }}>
              <Form.Item
                label={'文件限制'}
                rules={[{
                  required: true,
                  message: '请选择文件限制',
                }]}
                name={['files_req', 'file_limit']}

              >
                <Select style={{ width: 145, marginRight: 10 }}
                >
                  <Select.Option value={1}>不限制上传大小</Select.Option>
                  <Select.Option value={2}>限制上传大小</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={'大小'}
                name={['files_req', 'size']}
                rules={[{
                  required: true,
                  message: '请输入上传文件的大小',
                }]}

              >
                <InputNumber placeholder={'请输入'} min={0} max={10} />
              </Form.Item>
              <Form.Item
                label={'数量'}
                name={['files_req', 'num']}
                rules={[{
                  required: true,
                  message: '请填写数量',
                }]}

              >
                <Select style={{ width: 100 }}>
                  <Select.Option value={1}>1</Select.Option>
                </Select>
              </Form.Item>
            </div>

          </Form.Item>
          <Form.Item
            label={'文件格式'}
            name={'file_format'}

          >
            <Checkbox.Group options={options} />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 10, span: 16 }}
          >
            <Button type='primary' htmlType='submit'>
              完成编辑
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </Card>
  );
};
export default Login;
