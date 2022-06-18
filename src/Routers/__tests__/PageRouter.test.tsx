import { render } from '@testing-library/react';
import React from 'react';
import MockSeparator from '../../Reusables/Mocks/ParentChildren.Mock';
import { useLocation, useRouter } from 'wouter';
import PageRouter from '../PageRouter';

jest.mock('wouter', () => ({
  __esModule: true,
  Router: (props) => <MockSeparator mockLabel="AppRouter" {...props} />,
  useLocation: jest.fn(),
  useRouter: jest.fn()
}));

const mockUseLocation = useLocation as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

describe('PageRouter', () => {
  describe('should render if in correct url', () => {
    it('root level', () => {
      mockUseLocation.mockReturnValue(['root/correct/anything']);
      mockUseRouter.mockReturnValue({ base: '' });
      const { container } = render(
        <PageRouter base="root/correct">This should display</PageRouter>
      );
      expect(container).toMatchSnapshot();
    });
    it('children level', () => {
      mockUseLocation.mockReturnValue(['/anything']);
      mockUseRouter.mockReturnValue({ base: '/root/correct' });
      const { container } = render(<PageRouter base="/anything">This should display</PageRouter>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('should NOT render if not in correct url', () => {
    it('root level', () => {
      mockUseLocation.mockReturnValue(['root/correct/anything']);
      mockUseRouter.mockReturnValue({ base: '' });
      const { container } = render(
        <PageRouter base="not-correct">This should NOT display</PageRouter>
      );
      expect(container).toMatchSnapshot();
    });
    it('children level', () => {
      mockUseLocation.mockReturnValue(['/anything']);
      mockUseRouter.mockReturnValue({ base: '/root/correct' });
      const { container } = render(<PageRouter base="not-correct">This should display</PageRouter>);
      expect(container).toMatchSnapshot();
    });
  });
});
