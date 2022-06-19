import React from 'react';
import { Modal, Input, Form, Button } from 'antd';
import { useAppSelector } from 'src/Hooks/useReduxHooks';
import Styles from './FormModalHome.module.scss';
import useHome from '../Hooks/useHome';

const { TextArea } = Input;

interface IFormModalHome {
  onFinish: (e: boolean) => void;
  onCancel: () => void;
}

const FormModalHome: React.FC<IFormModalHome> = ({ onFinish, onCancel }) => {
  const { isModalVisible, formData, isEdit, data, isLoadingForm } = useAppSelector(
    (state) => state.home
  );
  const { onChange } = useHome();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const copyFormData = { ...formData };
    copyFormData[name] = e.target.value;
    if (!isEdit) {
      copyFormData['userId'] = 1;
      copyFormData['id'] = data.length + 1;
    }
    onChange(copyFormData);
  };

  return (
    <div>
      {isModalVisible && (
        <Modal
          title={isEdit ? 'Edit Data' : 'Add Data'}
          visible={isModalVisible}
          footer={null}
          onCancel={onCancel}>
          <Form
            name="basic"
            onFinish={() => onFinish(isEdit)}
            autoComplete="off"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}>
            <Form.Item
              label="Title"
              name="title"
              initialValue={formData.title}
              rules={[{ required: true, message: 'Please input your title!' }]}>
              <Input
                value={formData.title}
                defaultValue={formData.title}
                onChange={(e) => onChangeInput(e, 'title')}
              />
            </Form.Item>

            <Form.Item
              label="Body"
              name="body"
              initialValue={formData.body}
              rules={[{ required: true, message: 'Please input your body!' }]}>
              <TextArea
                value={formData.body}
                defaultValue={formData.body}
                onChange={(e) => onChangeInput(e, 'body')}
              />
            </Form.Item>

            <Form.Item className={Styles['btn-container']} wrapperCol={{ offset: 4, span: 20 }}>
              <Button
                data-testid="submit-btn"
                type="primary"
                htmlType="submit"
                loading={isLoadingForm}
                disabled={isLoadingForm}>
                Submit
              </Button>
              <Button
                data-testid="cancel-btn"
                type="primary"
                onClick={onCancel}
                style={{ marginLeft: 10 }}
                disabled={isLoadingForm}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default FormModalHome;
