import { all, call } from 'redux-saga/effects';
import fileSectionSaga from './fileSectionSaga';
import textSaga from './contentTextSaga';

export default function* rootSaga() {
  yield all([call(fileSectionSaga), call(textSaga)]);
}
