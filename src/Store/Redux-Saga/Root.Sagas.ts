import { all } from 'redux-saga/effects';
import authSaga from './Auth.Saga';
import homeSaga from './Home.Saga';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
