import { call, put, takeEvery } from 'redux-saga/effects';
import { getXmlPath } from '../api/xmlFile';

export function* fetchFilePath() {
  try {
    const { paths } = yield call(getXmlPath);
    yield put({ type: 'FILE_SECTION_PATH_FETCH_SUCCEEDED', paths });
  } catch (error) {
    yield put({ type: 'FILE_SECTION_PATH_FETCH_FAILED', error });
  }
}

export default function* filePathSaga() {
  yield takeEvery('FILE_SECTION_PATH_FETCH_REQUESTED', fetchFilePath);
}
