import React from 'react';
import { Modal, Input, Form, Button } from 'antd';
import Styles from './FormModalHome.module.scss';

const { TextArea } = Input;

interface IFormModalHome {
  isVisible: boolean;
  onFinish: () => void;
  onCancel: () => void;
}

const FormModalHome: React.FC<IFormModalHome> = ({ isVisible, onFinish, onCancel }) => {
  return (
    <Modal title="Add Data" visible={isVisible} footer={null} onCancel={onCancel}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Body"
          name="body"
          rules={[{ required: true, message: 'Please input your body!' }]}>
          <TextArea />
        </Form.Item>

        <Form.Item className={Styles['btn-container']} wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormModalHome;
