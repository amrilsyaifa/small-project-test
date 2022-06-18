import React from 'react';
import { Card as CardAntd, Tooltip, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Styles from './Card.module.scss';

interface ICard {
  title: string;
  body: string;
  onEdit: () => void;
  onDelete: () => void;
}

interface IExtraComponent {
  onEdit: () => void;
  onDelete: () => void;
}

interface ITitleComponent {
  title: string;
}

const ExtraComponent: React.FC<IExtraComponent> = ({ onEdit, onDelete }) => {
  return (
    <div className={Styles['wrapper-header-action']}>
      <Button onClick={onEdit} className={Styles['edit-icon']} data-testid="edit-btn">
        <EditOutlined />
        <div>Edit</div>
      </Button>
      <Button danger onClick={onDelete} className={Styles['remove-icon']} data-testid="remove-btn">
        <DeleteOutlined />
        <div>Delete</div>
      </Button>
    </div>
  );
};

const TitleComponent: React.FC<ITitleComponent> = ({ title }) => {
  return (
    <Tooltip placement="top" title={title}>
      <div>{title}</div>
    </Tooltip>
  );
};

const Card: React.FC<ICard> = ({ title, body, onEdit, onDelete }) => {
  return (
    <div className={Styles['container']}>
      <CardAntd
        className={Styles['card']}
        title={<TitleComponent title={title} />}
        style={{ width: 300 }}>
        <div>{body}</div>
        <div className={Styles['wrapper-button']}>
          <ExtraComponent onEdit={onEdit} onDelete={onDelete} />
        </div>
      </CardAntd>
    </div>
  );
};

export default Card;
