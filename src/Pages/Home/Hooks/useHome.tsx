import React from 'react';
import { Modal } from 'antd';
import { useAppDispatch } from 'src/Hooks/useReduxHooks';
import { homeActionsSaga } from 'src/Reusables/Actions/SagaActions';
import { IHome } from 'src/Store/Reducers/Home.Reducer';
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
    console.log();
  };

  const onEditData = (item: IHome) => {
    console.log(item);
  };

  return {
    onFetchData,
    onDeletePress,
    onAddData,
    onEditData
  };
};

export default useHome;
