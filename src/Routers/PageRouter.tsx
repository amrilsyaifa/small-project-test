import React from 'react';
import { Router, useLocation, useRouter } from 'wouter';

export interface IPageRouter {
  base: string;
  children?: React.ReactNode;
}

const PageRouter: React.FC<IPageRouter> = ({ base, children }) => {
  const router = useRouter();
  const [location] = useLocation();
  const nestedBase = `${router.base}${base}`;
  const parentLocation = `${router.base}${location}`;

  if (!parentLocation.startsWith(nestedBase)) return null;
  return (
    <Router base={nestedBase} key={nestedBase}>
      {children}
    </Router>
  );
};

export default PageRouter;
