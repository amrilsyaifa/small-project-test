import { call, takeEvery, put } from 'redux-saga/effects';
import Api from 'src/Reusables/Services/Api.Services';
import { fetchData, setIsLoading } from '../Reducers/Home.Reducer';
import { homeActionsSaga, fetchFailedSaga } from 'src/Reusables/Actions/SagaActions';
import { IHome } from '../Reducers/Home.Reducer';

export function* fetchHomeDataSaga() {
  try {
    yield put(setIsLoading(true));
    const urls = Array.from(Array(100).keys()).map((i) => Api.get(`/posts/${i + 1}`));
    const response = yield call(async () => await Promise.all(urls));
    const result = response?.map((list: any) => list.data);
    yield put(setIsLoading(false));
    yield put(fetchData(result as IHome[]));
  } catch (e) {
    yield put(setIsLoading(false));
    yield put({ type: fetchFailedSaga.FETCH_FAILED });
  }
}

export default function* authSaga() {
  yield takeEvery(homeActionsSaga.FETCH_DATA_HOME, fetchHomeDataSaga);
}
