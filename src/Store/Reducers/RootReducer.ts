import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth.Reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
