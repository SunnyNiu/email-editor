import { call, put, takeEvery } from 'redux-saga/effects';
import { getSections } from '../api/xmlFile';
import { fetchFile } from '../reducers/types';

export function* fetchSectionPath() {
  try {
    const sections = yield call(getSections);
    yield put({ type: fetchFile.FILE_SECTIONS_FETCH_SUCCEEDED, sections });
  } catch (error) {
    yield put({ type: fetchFile.FILE_SECTIONS_FETCH_FAILED, error });
  }
}

export default function* fileSectionSaga() {
  yield takeEvery(fetchFile.FILE_SECTIONS_FETCH_REQUESTED, fetchSectionPath);
}
