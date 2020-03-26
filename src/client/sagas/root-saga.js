import { all, call } from 'redux-saga/effects';
import fileSaga from './filePathSaga';

export default function* rootSaga() {
  yield all([call(fileSaga)]);
}
