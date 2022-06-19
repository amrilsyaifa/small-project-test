import React from 'react';
import { Modal } from 'antd';
import { useAppDispatch } from 'src/Hooks/useReduxHooks';
import { homeActionsSaga } from 'src/Reusables/Actions/SagaActions';
import {
  clearFormData,
  IHome,
  onChangeFormData,
  setIsIsEdit,
  setIsModalVisible
} from 'src/Store/Reducers/Home.Reducer';
import Title from 'antd/lib/typography/Title';

const useHome = () => {
  const dispatch = useAppDispatch();

  const onFetchData = () => {
    dispatch({ type: homeActionsSaga.FETCH_DATA_HOME });
  };
  const onDeletePress = (data: IHome) => {
    Modal.warning({
      title: <Title level={4}>Apakah anda yakin untuk hapus data {data.title} ini?</Title>,
      onOk() {
        onDelete();
      },
      okText: 'Ya',
      cancelText: 'Tidak',
      okCancel: true,
      zIndex: 20000
    });
  };

  const onDelete = () => {
    console.log();
  };

  const onAddData = () => {
    dispatch(clearFormData());
    dispatch(setIsIsEdit(false));
    dispatch(setIsModalVisible(true));
  };

  const onCancel = () => {
    dispatch(clearFormData());
    dispatch(setIsModalVisible(false));
  };

  const onEditData = (item: IHome) => {
    dispatch(onChangeFormData(item));
    dispatch(setIsIsEdit(true));
    dispatch(setIsModalVisible(true));
  };

  const onChange = (item: IHome) => {
    dispatch(onChangeFormData(item));
  };

  const onSubmit = (isEdit: boolean) => {
    if (isEdit) {
      dispatch({ type: homeActionsSaga.EDIT_DATA_HOME });
      return;
    }
    dispatch({ type: homeActionsSaga.CREATE_DATA_HOME });
  };

  return {
    onFetchData,
    onDeletePress,
    onAddData,
    onEditData,
    onCancel,
    onChange,
    onSubmit
  };
};

export default useHome;
