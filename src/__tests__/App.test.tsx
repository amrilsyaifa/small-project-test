import { render, cleanup } from 'src/Reusables/Mocks/test-utils';
import React from 'react';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';
import App from '../App';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('App', () => {
  it('should render expect snapshoot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
