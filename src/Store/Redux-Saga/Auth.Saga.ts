import { call, takeEvery, put } from 'redux-saga/effects';
import Api from 'src/Reusables/Services/Api.Services';
import { fetchData } from '../Reducers/Auth.Reducer';
import { authActionsSaga } from 'src/Reusables/Actions/SagaActions';

export function* fetchAuthDataSaga() {
  try {
    const result = yield call(() => Api.get('/auth'));
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
}

export default function* authSaga() {
  yield takeEvery(authActionsSaga.FETCH_DATA_AUTH, fetchAuthDataSaga);
}
