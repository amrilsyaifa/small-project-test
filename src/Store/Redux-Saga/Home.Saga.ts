import { call, takeEvery, put, select } from 'redux-saga/effects';
import Api from 'src/Reusables/Services/Api.Services';
import { notification } from 'antd';
import {
  addData,
  clearFormData,
  fetchData,
  selectHome,
  setIsLoading,
  setIsLoadingForm,
  setIsModalVisible
} from '../Reducers/Home.Reducer';
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

export function* createHomeDataSaga() {
  try {
    yield put(setIsLoadingForm(true));
    const data = yield select(selectHome);
    const response = yield call(() => Api.post('/posts', data.formData));
    yield call(() =>
      notification.open({
        message: 'Success',
        description: 'Success Create Data'
      })
    );
    yield put(addData(response.data as IHome));
    yield put(setIsLoadingForm(false));
    yield put(clearFormData());
    yield put(setIsModalVisible(false));
  } catch (e) {
    yield put(setIsLoadingForm(false));
    yield put({ type: fetchFailedSaga.FETCH_FAILED });
  }
}

export function* editHomeDataSaga() {
  try {
    yield put(setIsLoadingForm(true));
    const data = yield select(selectHome);
    const response = yield call(() => Api.put(`/posts/${data.formData.id}`, data.formData));
    yield call(() =>
      notification.open({
        message: 'Success',
        description: 'Success Update Data'
      })
    );
    const copyData = [...data.data].map((item) => {
      if (item.id === response.data.id) {
        return response.data;
      }
      return item;
    });
    console.log('isi response ', copyData);
    yield put(fetchData(copyData as IHome[]));
    yield put(setIsLoadingForm(false));
    yield put(clearFormData());
    yield put(setIsModalVisible(false));
  } catch (e) {
    yield put(setIsLoadingForm(false));
    yield put({ type: fetchFailedSaga.FETCH_FAILED });
  }
}

export default function* authSaga() {
  yield takeEvery(homeActionsSaga.FETCH_DATA_HOME, fetchHomeDataSaga);
  yield takeEvery(homeActionsSaga.CREATE_DATA_HOME, createHomeDataSaga);
  yield takeEvery(homeActionsSaga.EDIT_DATA_HOME, editHomeDataSaga);
}
