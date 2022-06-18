import React from 'react';
import { useLocation } from 'wouter';
import { IPageRouter } from './PageRouter';

interface IRouteWrapper extends IPageRouter {
  Render: React.FC<IPageRouter>;
}

/**
 * Wrap Router file so it won't load function inside the router unless it's part of the url children (startsWith)
 * Please note it's using relative location from useLocation (not the absolute path because it's discarded by Page Router)
 */
export const RouteWrapper: React.FC<IRouteWrapper> = ({ Render, base }) => {
  const [location] = useLocation();

  if (!location.startsWith(base)) return null;
  return <Render base={base} key={base} />;
};

export default RouteWrapper;
