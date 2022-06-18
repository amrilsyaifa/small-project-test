import React, { useEffect } from 'react';
import { List } from 'antd';
import Card from 'src/Reusables/Components/Card';
import { useAppDispatch, useAppSelector } from 'src/Hooks/useReduxHooks';
import { homeActionsSaga } from 'src/Reusables/Actions/SagaActions';
import { IHome } from 'src/Store/Reducers/Home.Reducer';
import Loading from 'src/Reusables/Components/Loading';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.home);

  useEffect(() => {
    onFetchData();
  }, []);

  const onFetchData = () => {
    dispatch({ type: homeActionsSaga.FETCH_DATA_HOME });
  };
  return (
    <div>
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
                onDelete={() => console.log()}
                onEdit={() => console.log()}
                title={item.title}
                body={item.body}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Home;
