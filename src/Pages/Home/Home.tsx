import React, { useEffect } from 'react';
import { Button, List } from 'antd';
import Card from 'src/Reusables/Components/Card';
import { useAppSelector } from 'src/Hooks/useReduxHooks';
import { IHome } from 'src/Store/Reducers/Home.Reducer';
import Loading from 'src/Reusables/Components/Loading';
import { PlusOutlined } from '@ant-design/icons';
import Styles from './Home.module.scss';
import FormModalHome from './components/FormModal.Home';

import useHome from './Hooks/useHome';

const Home = () => {
  const { onFetchData, onDeletePress, onAddData, onEditData, onCancel, onSubmit } = useHome();
  const { data, isLoading } = useAppSelector((state) => state.home);

  useEffect(() => {
    onFetchData();
  }, []);

  return (
    <div className={Styles['container']}>
      <div className={Styles['container-button']}>
        <Button
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          size="large"
          onClick={onAddData}>
          Tambah Data
        </Button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <List
          grid={{
            gutter: 3,
            xs: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          dataSource={data}
          renderItem={(item: IHome) => (
            <List.Item>
              <Card
                onDelete={() => onDeletePress(item)}
                onEdit={() => onEditData(item)}
                title={item.title}
                body={item.body}
              />
            </List.Item>
          )}
        />
      )}

      <FormModalHome onFinish={onSubmit} onCancel={onCancel} />
    </div>
  );
};

export default Home;
