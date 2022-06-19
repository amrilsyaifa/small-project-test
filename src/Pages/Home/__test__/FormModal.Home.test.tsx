import { render, cleanup } from 'src/Reusables/Mocks/test-utils';
import React from 'react';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';
import FormModalHome from '../components/FormModal.Home';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('FormModalHome', () => {
  it('should render expect snapshoot', () => {
    const onFinish = jest.fn;
    const onCancel = jest.fn;
    const { container } = render(<FormModalHome onFinish={onFinish} onCancel={onCancel} />);
    expect(container).toMatchSnapshot();
  });
});
