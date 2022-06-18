import { call, takeEvery, put } from 'redux-saga/effects';
import Api from 'src/Reusables/Services/Api.Services';
import { fetchData } from '../Reducers/Auth.Reducers';
import { sagaActions } from 'src/Reusables/Actions/SagaActions';

export function* fetchDataSaga() {
  try {
    const result = yield call(() => Api.get('/auth'));
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
}

export default function* authSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
