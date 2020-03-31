import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getText, saveText } from '../api/contentText';
import { fetchText } from '../reducers/types';

export function* fetchTextPath(action) {
  try {
    const { text } = yield call(getText, action.userId);
    yield put({ type: fetchText.FETCH_TEXT_SUCCEEDED, text });
  } catch (error) {
    yield put({ type: fetchText.FETCH_TEXT_FAILED, error });
  }
}

export function* contentTextSaga() {
  yield takeEvery(fetchText.FETCH_TEXT_REQUESTED, fetchTextPath);
}

export function* saveContentText(action) {
  try {
    yield call(saveText, action.userId, action.text);
    yield put({ type: fetchText.SAVE_TEXT_SUCCEEDED });
  } catch (error) {
    yield put({ type: fetchText.FETCH_TEXT_FAILED, error });
  }
}

export function* saveTextSaga() {
  yield takeEvery(fetchText.SAVE_TEXT_REQUESTED, saveContentText);
}

export default function* textSaga() {
  yield all([call(contentTextSaga), call(saveTextSaga)]);
}
