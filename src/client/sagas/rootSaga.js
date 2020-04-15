import { all, call } from 'redux-saga/effects';
import fileSectionSaga from './fileSectionSaga';
import sectionsSaga from './contentSectionsSaga';

export default function* rootSaga() {
  yield all([call(fileSectionSaga), call(sectionsSaga)]);
}
