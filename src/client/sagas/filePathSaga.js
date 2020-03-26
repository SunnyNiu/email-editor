import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getXmlPath } from '../api/xmlFile';

function* fetchFilePath() {
  try {
    const object = yield call(getXmlPath);
    const paths = object.path;
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
