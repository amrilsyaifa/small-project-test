import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { persistedReducer } from 'src/Store';
// Import your own reducer

interface IWrapper {
  children: React.ReactNode;
}

const render = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  { store = configureStore({ reducer: persistedReducer }), ...renderOptions } = {}
) => {
  const Wrapper: React.FC<IWrapper> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
