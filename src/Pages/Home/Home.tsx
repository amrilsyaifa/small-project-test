import React from 'react';
import { List } from 'antd';
import Card from 'src/Reusables/Components/Card';

const Home = () => {
  return (
    <div>
      <List.Item>
        <Card
          onDelete={() => console.log()}
          onEdit={() => console.log()}
          title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
          body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        />
      </List.Item>
    </div>
  );
};

export default Home;
