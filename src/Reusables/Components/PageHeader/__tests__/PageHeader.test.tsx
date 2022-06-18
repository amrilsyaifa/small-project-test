import { render, screen, cleanup } from 'src/Reusables/Mocks/test-utils';
import React from 'react';
import PageHeader from '../PageHeader';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('PageHeader', () => {
  test('PageHeader Render Snapshoot', () => {
    const { container } = render(<PageHeader />);
    expect(container).toMatchSnapshot();
  });

  test('PageHeader Have Title', () => {
    render(<PageHeader />);
    const titleHeader = screen.getByText('Login');
    expect(titleHeader).toBeInTheDocument();
  });
});
