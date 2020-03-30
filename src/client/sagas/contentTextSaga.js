import { call, put, takeEvery } from 'redux-saga/effects';
import { getText } from '../api/contentText';
import { fetchText } from '../reducers/types';

export function* fetchTextPath(action) {
  try {
    const text = yield call(getText, action.userId);
    yield put({ type: fetchText.FETCH_TEXT_SUCCEEDED, text });
  } catch (error) {
    yield put({ type: fetchText.FETCH_TEXT_FAILED, error });
  }
}

export default function* contentTextSaga() {
  yield takeEvery(fetchText.FETCH_TEXT_REQUESTED, fetchTextPath);
}
