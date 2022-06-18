import { render, cleanup, screen, fireEvent } from 'src/Reusables/Mocks/test-utils';
import React from 'react';
import Card from '../Card';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('Card', () => {
  test('Card Render Snapshoot', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const { container } = render(
      <Card title={'Title'} body={'This Body'} onEdit={onEdit} onDelete={onDelete} />
    );
    const titleCard = screen.getByText('Title');
    expect(titleCard).toBeInTheDocument();
    const titleBody = screen.getByText('This Body');
    expect(titleCard).toBeInTheDocument();
    expect(titleBody).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Card Action Button Not Called', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    render(<Card title={'Title'} body={'This Body'} onEdit={onEdit} onDelete={onDelete} />);
    expect(onEdit).not.toBeCalled();
    expect(onEdit).not.toBeCalled();
  });
  test('Card Action Button Called', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    render(<Card title={'Title'} body={'This Body'} onEdit={onEdit} onDelete={onDelete} />);
    const pressEdit = screen.getByTestId('edit-btn');
    fireEvent.click(pressEdit);
    expect(onEdit).toBeCalled();

    const pressDelete = screen.getByTestId('remove-btn');
    fireEvent.click(pressDelete);
    expect(onDelete).toBeCalled();
  });
});
