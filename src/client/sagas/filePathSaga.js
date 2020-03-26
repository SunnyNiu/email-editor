import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getXmlPath } from '../api/xmlFile';

function* fetchFilePath() {
  try {
    const { paths } = yield call(getXmlPath);
    yield put({ type: 'FILE_SECTION_PATH_FETCH_SUCCEEDED', paths });
  } catch (error) {
    console.log('error in saga', error);
    yield put({ type: 'FILE_SECTION_PATH_FETCH_FAILED', error });
  }
}

function* pathSaga() {
  yield takeEvery('FILE_SECTION_PATH_FETCH_REQUESTED', fetchFilePath);
}

export default function* fileSaga() {
  yield all([call(pathSaga)]);
}
