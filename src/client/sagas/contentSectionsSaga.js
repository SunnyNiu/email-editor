import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getSections, saveSections } from '../api/contentSection';
import { fetchSections } from '../reducers/types';

export function* fetchContentSections({ emailId }) {
  try {
    const { email } = yield call(getSections, emailId);
    yield put({ type: fetchSections.FETCH_SECTIONS_SUCCEEDED, email });
  } catch (error) {
    yield put({ type: fetchSections.FETCH_SECTIONS_FAILED, error });
  }
}

export function* contentSectionsSaga() {
  yield takeEvery(fetchSections.FETCH_SECTIONS_REQUESTED, fetchContentSections);
}

export function* saveContentSections({ emailId, dropSections }) {
  try {
    yield call(saveSections, emailId, dropSections);
    yield put({ type: fetchSections.SAVE_SECTIONS_SUCCEEDED });
  } catch (error) {
    yield put({ type: fetchSections.SAVE_SECTIONS_FAILED, error });
  }
}

export function* saveSectionsSaga() {
  yield takeEvery(fetchSections.SAVE_SECTIONS_REQUESTED, saveContentSections);
}

export default function* textSaga() {
  yield all([call(contentSectionsSaga), call(saveSectionsSaga)]);
}
