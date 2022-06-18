import { render, cleanup } from 'src/Reusables/Mocks/test-utils';
import React from 'react';
import Loading from '../Loading';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('Loading', () => {
  test('Loading Render Snapshoot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
