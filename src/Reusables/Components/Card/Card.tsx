import React from 'react';
import { Card as CardAntd, Tooltip } from 'antd';
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
      <div onClick={onEdit} className={Styles['edit-icon']} data-testid="edit-btn">
        <EditOutlined />
      </div>
      <div onClick={onDelete} className={Styles['remove-icon']} data-testid="remove-btn">
        <DeleteOutlined />
      </div>
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
        extra={<ExtraComponent onEdit={onEdit} onDelete={onDelete} />}
        style={{ width: 300 }}>
        <div>{body}</div>
      </CardAntd>
    </div>
  );
};

export default Card;
