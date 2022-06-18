import { render } from '@testing-library/react';
import React from 'react';
import { useLocation } from 'wouter';
import { RouteWrapper } from '../RouteWrapper';

jest.mock('wouter', () => ({
  ...jest.requireActual('wouter'),
  useLocation: jest.fn()
}));

const mockUseLocation = useLocation as jest.Mock;

describe('RouteWrapper', () => {
  it('should render children on the right url', () => {
    mockUseLocation.mockReturnValue(['/correct']);
    const { container, queryByText } = render(
      <RouteWrapper base="/correct" Render={() => <div>This should display</div>} />
    );
    expect(container).toMatchSnapshot();
    expect(queryByText('This should display')).toBeDefined();
  });

  it('should render children on the children url', () => {
    mockUseLocation.mockReturnValue(['/correct/children']);
    const { container, queryByText } = render(
      <RouteWrapper base="/correct" Render={() => <div>This should display</div>} />
    );
    expect(container).toMatchSnapshot();
    expect(queryByText('This should display')).toBeDefined();
  });

  it('should render NOT render on the wrong url', () => {
    mockUseLocation.mockReturnValue(['/correct']);
    const { container, queryByText } = render(
      <RouteWrapper base="/wrong" Render={() => <div>This should NOT display</div>} />
    );
    expect(container).toMatchSnapshot();
    expect(queryByText('This should NOT display')).toBeNull();
  });

  it('should render NOT render on the wrong url parent', () => {
    mockUseLocation.mockReturnValue(['/wrong/correct']);
    const { container, queryByText } = render(
      <RouteWrapper base="/correct" Render={() => <div>This should NOT display</div>} />
    );
    expect(container).toMatchSnapshot();
    expect(queryByText('This should NOT display')).toBeNull();
  });
});
