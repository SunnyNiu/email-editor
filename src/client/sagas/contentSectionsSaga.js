import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getEmail, saveEmail } from '../api/contentSection';
import { fetchEmail } from '../reducers/types';

export function* fetchContentSections({ emailId }) {
  try {
    const { email } = yield call(getEmail, emailId);
    yield put({
      type: fetchEmail.FETCH_EMAIL_SUCCEEDED,
      email,
    });
  } catch (error) {
    yield put({ type: fetchEmail.FETCH_EMAIL_FAILED, error });
  }
}

export function* contentSectionsSaga() {
  yield takeEvery(fetchEmail.FETCH_EMAIL_REQUESTED, fetchContentSections);
}

export function* saveContentSections({ emailId, email }) {
  try {
    yield call(saveEmail, emailId, email);
    yield put({ type: fetchEmail.SAVE_EMAIL_SUCCEEDED });
  } catch (error) {
    yield put({ type: fetchEmail.SAVE_EMAIL_FAILED, error });
  }
}

export function* saveEmailSaga() {
  yield takeEvery(fetchEmail.SAVE_EMAIL_REQUESTED, saveContentSections);
}

export default function* textSaga() {
  yield all([call(contentSectionsSaga), call(saveEmailSaga)]);
}
