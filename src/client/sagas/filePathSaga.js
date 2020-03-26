import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getXmlPath } from '../api/xmlFile';

function* fetchFilePath() {
  try {
    console.log('fetch request saga file path');
    const paths = yield call(getXmlPath);
    yield put({ type: 'FILE_PATH_FETCH_SUCCEEDED', paths });
  } catch (e) {
    yield put({ type: 'FILE_PATH_FETCH_FAILED', message: e.message });
  }
}

function* pathSaga() {
  yield takeEvery('FILE_PATH_FETCH_REQUESTED', fetchFilePath);
}

export default function* fileSaga() {
  yield all([call(pathSaga)]);
}
